import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./poststore";

const Postdata = ({ post }) => {
  const { deletepost } = useContext(PostList);
  const handleDelete = () => {
    deletepost(post.id);
  };

  const [AddLike, setLike] = useState(post.reactions.likes);
  const addLike = () => {
    setLike(post.reactions.likes + 1);
  };

  return (
    <>
      <div className="card postcard">
        <div className="card-body">
          <h3 className="card-title">
            {post.title}
            <span
              onClick={addLike}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger arw"
            >
              {AddLike + "+👍"}
            </span>
          </h3>
          <p className="card-text b12">{post.body}</p>
          <h5>Likes 👍: {AddLike + " "}people like this Post!! </h5>
          {post.tags.map((tag) => (
            <span key={tag} className="badge rounded-pill  tagmargin">
              {tag}
            </span>
          ))}
          <hr />
          <h5 className="del" onClick={handleDelete}>
            Delete Post : <MdDelete />
          </h5>
        </div>
      </div>
    </>
  );
};

export default Postdata;
