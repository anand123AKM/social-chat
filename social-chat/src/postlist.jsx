import React from 'react'
import Postdata from './postdata';
import { useContext } from 'react';
import { PostList} from './poststore'; 
import Msg from './msg';
import {useNavigate} from 'react-router-dom';


const Postlist = () => {
    const navigate = useNavigate();
const {postList, addinitialpost } = useContext(PostList);
const handleonclick = () => {
fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data) => {
  addinitialpost(data.posts);
     navigate("/");
});
}

  return (
    <div >
      {postList.length === 0 && <Msg onclick={handleonclick} />}
      <div className='mar321' style={{display:"flex",flexWrap:"wrap", margin:"90px"}}>
             {postList.map((post)=> <Postdata key={post.id} post={post} />)}
            </div>
    </div>
  )
}

export default Postlist
