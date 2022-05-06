const express = require("express");
const router = express.Router();
const data = require("../data");
const findIndividualPost = data.findIndividualPost;
const commentsApi = data.makeComments;

// Error checking, call to data function, render the data to handlebars

router.get("/:postid", async (req, res) => {
    try{
        // if (!user) throw "user not provided, please provide.";
       
        const postDetail = await findIndividualPost.searchPost(req.params.postid);
        const commentList = await commentsApi.getAllComments(req.params.postid);
        console.log("routes/individialpost/postDeatilbyID",postDetail[0])
        res.render("post/individualPost", {
            postDetail:postDetail[0],
            comments: commentList
        })
    }
    catch (e){

    }
});



module.exports = router;