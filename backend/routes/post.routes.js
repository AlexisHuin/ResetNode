const express = require("express");
const { setPosts, getPosts, editPosts, deletePosts, setLike, dropLike } = require("../controllers/post.controller");
const router = express.Router();

//READ
router.get("/", getPosts);
//CREATE
router.post("/", setPosts);
//UPDATE
router.put('/:id', editPosts);
//DELETE
router.delete("/:id", deletePosts )
//LIKE
router.patch("/like-post/:id", setLike)
//DISLIKE
router.patch("/like-post/:id", dropLike)


//DISLIKE
router.patch("/dislike-post/:id", (req, res) => {
    res.json({message: "Post disliké : id : " + req.params.id })
})

module.exports = router;
