const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const geminiRoutes = require('./routes/geminiRoutes');
dotenv.config();

const app = express();
app.use(cors({
    origin :"https://vedwati2000.github.io/Exam_preparation/"
}));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/gemini', geminiRoutes);
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send("Server Running");
})
const PORT=3000



app.listen(PORT, () => {
    console.log(`Server running on PORT http://localhost:${PORT}`);
})