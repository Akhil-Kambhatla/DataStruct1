// db.js
// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // CommentForm.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB connection string)
mongoose.connect("mongodb+srv://akhilkambhatlaedu:dGyQuUzxqOaA5g4a@cluster0.6tvekcl.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected Successfully");
}).catch((err) => {
  console.error("Error:", err);
});


const commentSchema = new mongoose.Schema({
  author: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

app.get('/CommentForm', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/CommentForm', async (req, res) => {
  const { author, text } = req.body;

  try {
    const newComment = new Comment({ author, text });
    await newComment.save();
    res.json({ success: true, comment: newComment });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Timeline')

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const ytlinkschema = new mongoose.Schema({
  youtubeLinks:[String]
});
const ytlinks = mongoose.model('ytlinks',ytlinkschema );

app.get('/Timeline',async(req,res)=>{
  try{
    console.log('in timeline')
    // console.log(req.query)
    const link=await ytlinks.find({})
    // console.log(link)
    // console.log(typeof(link))
    res.send(link[0]?.youtubeLinks)
    console.log(link[0]?.youtubeLinks)
  }catch(err){
    console.log(err)
  }
})
