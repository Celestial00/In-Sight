const express = require("express");
const PostRouter = express.Router();
const Post = require("../Models/PostModel");
const verifyToken = require("../verify");

PostRouter.get("/", async (req, res) => {

    const query = req.query
  try {

    searchFIlter = {
        Title: {$regex:query.search, $options: "i"}
    }
    const posts = await Post.find(query.search? searchFIlter : null);
    res.status(200).json(posts);
  } catch (err) {}
});

PostRouter.post("/write", verifyToken, async (req, res) => {
  try {
    const post = new Post(req.body);
    const newPost = await post.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

PostRouter.delete("/delete/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//user posts

PostRouter.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = PostRouter;
