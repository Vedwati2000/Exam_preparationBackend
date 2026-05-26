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
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:3000",
    "https://dashing-taiyaki-17d773.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
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