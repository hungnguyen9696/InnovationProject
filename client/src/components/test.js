//Front end
//Get Posts about Science
export const getPostsScience = input => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts/topic/science")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

//Back end

router.get("/topic/:searchString", (req, res) => {
  Post.find({ text: { $regex: req.params.searchString } })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No post found " }));
});
