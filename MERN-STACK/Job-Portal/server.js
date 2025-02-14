import express from "express";
import "express-async-errors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddlewares.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Swagger Options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal API",
      version: "1.0.0",
      description: "Node.js Express Job Portal API Documentation",
    },
    servers: [
      {
        url: "http://localhost:" + port,
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Connect to DB safely
const startServer = async () => {
  try {
    await connectDB();

    // Security Middleware
    app.use(helmet());
    app.use(xss());
    app.use(mongoSanitize());

    // Other Middlewares
    app.use(express.json());
    app.use(cors());
    app.use(morgan("dev"));

    // API Routes
    app.use("/api/v1/test", testRoutes);
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/user", userRoutes);
    app.use("/api/v1/job", jobRoutes);

    // Swagger Docs Route
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    // Error Middleware
    app.use(errorMiddleware);

    // Start Server
    app.listen(port, () => {
      console.log(
        `Node server running in ${process.env.DEV_MODE} mode on port ${port}`
          .bgCyan.white
      );
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();
