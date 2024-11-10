import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import postRoutes from './routes/post.route.js'
import path from 'path';


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDb is connected')
    }).catch((err) => {
        console.log(err);
    })

const app = express();
const _dirname = path.resolve();

app.use(express.json())

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.use('/server/user', userRoutes)
app.use('/server/auth', authRoutes)
app.use('/server/post', postRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

//backend deploy
app.use(express.static(path.join(_dirname, "/client/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
})