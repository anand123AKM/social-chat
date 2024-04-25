import  { useContext, useRef } from 'react'
import {PostList} from './poststore';

const CreatePost = () => {
const {addpost}=useContext(PostList);


const userIdele=useRef();
const titleele=useRef();
const bodyele=useRef();
const reactionsele=useRef();
const tagsele=useRef();


const handlesubmit=(event)=>{
  event.preventDefault();
const userId=userIdele.current.value;
const title=titleele.current.value;
const body = bodyele.current.value;
const reactions=reactionsele.current.value;
const tags=tagsele.current.value.split(" ");

userIdele.current.value="";
titleele.current.value="";
bodyele.current.value="";
reactionsele.current.value="";
tagsele.current.value=""; 

addpost(userId,title,body,reactions,tags);
};

  return (
    <div >
      <form className='form12'  onSubmit={handlesubmit}>
        <h2 className='post21'>Your Post</h2>
          <div className="mb-3">
     <label htmlFor="userId" className="form-label">User ID</label>
    <input ref={userIdele} placeholder='Enter your User ID' type="text" className="form-control" id="userId" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input ref={titleele} placeholder='Enter your title' type="text" className="form-control" id="tilte" />
  </div>
  <div className="mb-3">
     <label htmlFor="body" className="form-label">Post Content</label>
    <textarea ref={bodyele} rows={4} placeholder='Enter your content' type="text" className="form-control" id="body" />
  </div>
    <div className="mb-3">
     <label htmlFor="reactions" className="form-label"></label>No. of Likes=:
    <input ref={reactionsele} placeholder='no. of likes' type="text" className="form-control" id="reactions" />
  </div>
   <div className="mb-3">
     <label htmlFor="tags" className="form-label"></label>Tags
    <input ref={tagsele} placeholder='enter your #tags using space' type="text" className="form-control" id="tags" />
  </div>
  <button type="submit" className="btn btn-primary col21">Post</button>
</form>
    </div>
  )
}

export default CreatePost
