const express = require("express");
const CommentRouter = express.Router();
const commentModel = require("../Models/CommentModel");

CommentRouter.get("/", async (req, res) => {
  try {
    const comments = await comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

CommentRouter.post("/write", async (req, res) => {
  try {
    const comment = new commentModel(req.body);
    const newcomment = await comment.save();
    res.status(200).json(newcomment);

  } 
  catch (err) {

    res.status(500).send(err);
  }


});

CommentRouter.delete("/delete/:id", async (req, res) => {
  try {
    await commentModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//user comments

CommentRouter.get("/post/:postId", async (req, res) => {
  try {
    const comments = await commentModel.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = CommentRouter;
