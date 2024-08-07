import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  addinitialpost: () => {},
  deletepost: () => {},
});

const postListReducer = (curstate, action) => {
  if (action.type === "DELETE") {
    const updatedPost = curstate.filter((post) => post.id !== action.id);
    return updatedPost;
  } else if (action.type === "ADD") {
    const updatedPost = [...curstate];
    updatedPost.push(action.post);
    return updatedPost;
  } else if (action.type === "ADD_INITIAL") {
    const updatedPost = [...curstate];
    updatedPost.push(...action.post);
    return updatedPost;
  }
  return curstate;
};

const PostlistPrivider = ({ children }) => {
  const [postList, setpostcreate] = useReducer(postListReducer, []);
  const addpost = (userId, title, body, reactions, tags) => {
    setpostcreate({
      type: "ADD",
      post: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        count_of_likes: reactions + "+👍",
        userId: userId,
        tags: tags,
      },
    });
  };
  const addinitialpost = (posts) => {
    setpostcreate({ type: "ADD_INITIAL", post: posts });
  };

  const deletepost = (id) => {
    setpostcreate({ type: "DELETE", id: id });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addinitialpost,
        addpost,
        deletepost,
      }}
    >
      {children}{" "}
    </PostList.Provider>
  );
};

export default PostlistPrivider;
