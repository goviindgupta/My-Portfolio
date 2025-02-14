import jobModels from "../models/jobModels.js";
import mongoose from "mongoose";
import moment from "moment";
import { query } from "express";

export const createJobController = async (req, res, next) => {
  try {
    const { company, position } = req.body;
    if (!company || !position) {
      return next(new Error("Please provide all required fields"));
    }
    req.body.createdBy = req.user.userId;
    const job = await jobModels.create(req.body);
    res.status(201).json({ success: true, job });
  } catch (error) {
    next(error);
  }
};

export const getAllJobController = async (req, res, next) => {
  try {
    // const jobs = await jobModels.find({ createdBy: req.user.userId });
    const { status, workType, search, sort } = req.query;
    const queryObject = {
    createdBy: req.user.userId,
    };
    if (status && status !== "all") {
      queryObject.status = status;
    }
    if (workType && workType !== "all") {
      queryObject.workType = workType;
    }
    if (search) {
      queryObject.position = { $regex: search, $options: "i" };
    }

    let queryResult = jobModels.find(queryObject);

    if (sort === "latest") {
      queryResult = queryResult.sort("-createdAt");
    }
    if (sort === "oldest") {
      queryResult = queryResult.sort("createdAt");
    }
    if (sort === "a-z") {
      queryResult = queryResult.sort("position");
    }
    if (sort === "z-a") {
      queryResult = queryResult.sort("-position");
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit
    queryResult =queryResult.skip(skip).limit(limit)
    const totalJobs = await jobModels.countDocuments(queryResult)
    const numOfPage = Math.ceil(totalJobs / limit)


    const jobs = await queryResult;
    res.status(200).json({
      totalJobs,
      jobs,
      numOfPage,
    });
  } catch (error) {
    next(error);
  }
};

export const updateJobController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { company, position } = req.body;

    if (!company || !position) {
      return next(new Error("Please provide all fields"));
    }

    const job = await jobModels.findOne({ _id: id });
    if (!job) {
      return next(new Error(`No job found for this ID: ${id}`));
    }

    if (req.user.userId !== job.createdBy.toString()) {
      return next(new Error("You are not authorized to update this job"));
    }

    const updatedJob = await jobModels.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ updatedJob });
  } catch (error) {
    next(error);
  }
};

export const deleteJobController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await jobModels.findOne({ _id: id });

    if (!job) {
      return next(new Error(`No job found with this id ${id}`));
    }

    if (req.user.userId !== job.createdBy.toString()) {
      return next(new Error("You are not authorized to delete this job"));
    }

    await job.deleteOne();
    res.status(200).json({ message: "Success, Job Deleted" });
  } catch (error) {
    next(error);
  }
};

export const jobStatsController = async (req, res, next) => {
  try {
    const stats = await jobModels.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(req.user.userId),
        },
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    // Convert stats array into an object with default values
    const defaultStats = {
      pending: 0,
      reject: 0,
      interview: 0,
    };

    stats.forEach((stat) => {
      defaultStats[stat._id] = stat.count;
    });

    let monthlyApplication = await jobModels.aggregate([
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(req.user.userId),
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } }, // Sort in descending order
      { $limit: 6 }, // Get the last 6 months
    ]);

    monthlyApplication = monthlyApplication
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = moment()
          .month(month - 1)
          .year(year)
          .format("MMM Y");
        return { date, count };
      })
      .reverse();

    res
      .status(200)
      .json({ totalJobs: stats.length, defaultStats, monthlyApplication });
  } catch (error) {
    next(error);
  }
};
