require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const startServer = async () => {
    //Connect to MongoDB
    await mongoose.connect(process.env.MONGO_UI)
    console.log('MongoDB Connected :')

    //Create Apollo express Server
    const app = express()
    app.use(cors())
    app.use(express.json())

    const server = new ApolloServer({typeDefs,resolvers})
    await server.start()
    server.applyMiddleware({app,path:'/graphql'})

    // Start listening
    const port = process.env.PORT || 4000
    app.listen(port,()=>{
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
    })
}
startServer()