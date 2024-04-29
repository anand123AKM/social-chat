import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostList } from './poststore';

const Postdata = ({post}) => {
const {deletepost}=useContext(PostList)

  return (
    <>
       <div className="card postcard" >
  <div className="card-body">
    <h3 className="card-title">{post.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger arw">
  {post.reactions+"+👍"}
  </span>
    </h3>
    <p className="card-text b12">{post.body}</p>
      <h5>Likes 👍: {post.reactions +" "}people like this Post!! </h5>
    {post.tags.map((tag)=>(<span key={tag} className="badge rounded-pill  tagmargin">{tag}</span>))} 
    <hr/>
    <h5 className='del' onClick={()=>deletepost(post.id)}>Delete Post : <MdDelete /></h5> 
  </div>
</div>
    </>
  )
}

export default Postdata
