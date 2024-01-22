const express = require("express");
const { setPosts, getPosts, editPosts } = require("../controllers/post.controller");
const router = express.Router();

//READ
router.get("/", getPosts);

//CREATE
router.post("/", setPosts);

//UPDATE
router.put('/:id', editPosts);


//DELETE
router.delete("/:id", (req, res) => {
    res.json ({ message: "Post supprimé id : " + req.params.id })
})


//LIKE
router.patch("/like-post/:id", (req, res) => {
    res.json({message: "Post liké : id : " + req.params.id })
})


//DISLIKE
router.patch("/dislike-post/:id", (req, res) => {
    res.json({message: "Post disliké : id : " + req.params.id })
})

module.exports = router;
