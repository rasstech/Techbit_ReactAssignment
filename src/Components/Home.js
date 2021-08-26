import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dp from "./img/mypic.jpeg";
import Navbar from "./Navbar";

const Home = () => {
  const history = useHistory();
  let localUser = JSON.parse(localStorage.getItem("user"));
  let title = localStorage.getItem("postDesc");
  let imgPath = localStorage.getItem("postImg");

  const [likeCount, setlikeCount] = useState(1);
  const [Post, setPost] = useState(true);

  const RemovePost = () => {
    setPost(false);
    localStorage.removeItem("postDesc");
    localStorage.removeItem("postImg");
   };
  
  return (
    <div>
      <Navbar />
      
      {Post?
        <div className="Homecontainer">
        <div className="post">
            <div className="postUserDetail">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "100px" }}
                src={Dp}
                alt="dp"
              />
               <span className="p-2">
                 {`${localUser.fname}  ${localUser.lname}`}
               </span>
           
              <span  onClick={RemovePost}>
                <i class="fas fa-ellipsis-h"> </i>
              </span>
            </div>
            <p className='p-2'>{title}</p>
            <img src={imgPath} alt="post" />
            <div className="postCount px-2">
              <div>
                <i class="fas fa-thumbs-up" style={{ color: "#2277f2" }}></i>
                {likeCount}
              </div>
              <div style={{ marginLeft: "220px" }}>16 comments</div>
              <div>7 Share</div>
            </div>
            <div className="postAction">
              <div onClick={() => setlikeCount(likeCount + 1)}>
                <i class="far fa-thumbs-up"> Like </i>
              </div>
              <div>
                <i class="far fa-comment-alt"> Comment</i>
              </div>
              <div>
                <i class="fas fa-share"> Share</i>
              </div>
            </div>
          </div>
          </div>
          :<h1> no post available</h1>}
   </div>
    
  );
};

export default Home;
