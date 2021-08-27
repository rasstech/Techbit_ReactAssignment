import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Modal from "./Modal";
import Dp from "./img/mypic.jpeg";

const Navbar = ({postAdded}) => {
  let localUser = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const [isOpen, setisOpen] = useState(false);
  const [postDesc, setPostDesc] = useState("");
  const [postImg, setPostImg] = useState();

  const handleInput = (e) => {
    setPostDesc(e.target.value);
    console.log(e.target.value);
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setPostImg(base64);
      localStorage["postImg"] = base64;
      //   console.log("file stored", base64);
    });
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const SavePost = () => {
    localStorage.setItem("postDesc", postDesc);
    setisOpen(false);
    postAdded(true);
    history.push("/signin/home");
    // console.log(imgPath, title);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    history.push("/");
    alert("Logged Out");
  };

  return (
    <>
      <nav className="navbar">
        <div className="d-flex mx-3">
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"
            alt="logo"
          />
          <div className="searchBox">
            <SearchIcon />
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>

        <ul className="newsFeed">
          <Link exact to="/signin/home">
            <li>
              <HomeIcon />
            </li>
          </Link>
  
          <li onClick={() => setisOpen(true)}>
            <AddCircleOutlineIcon />
          </li>

   {/* ### create post section #### */}

          <Modal open={isOpen} onClose={() => setisOpen(false)}>
            <h2 className="createPostHeading">Create Post</h2>
            <div className="CreatePost">
              <div className="DpImg">
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                  }}
                  src={Dp}
                  alt="dp"
                />

                <span className="postUserName">
                  {`${localUser.fname}  ${localUser.lname}`}
                </span>
                <div className="postUserTag">
                  <i class="fas fa-users">
                        Friends <i class="fas fa-caret-down"></i>
                  </i>
                </div>
              </div>
              <div>
                <textarea
                  value={postDesc}
                  name="postDesc"
                  onChange={handleInput}
                  className="postCaption"
                  placeholder="What's on your mind  ?"
                />
                <span style={{ position: "relative", top: "-26px" }}>
                  &#128578;
                </span>
              </div>
              <div className="addPhotos">
                <div className="drop">
                  <input
                    style={{
                      opacity: "0",
                      cursor: "pointer",
                      position: "relative",
                      top: "20px",
                    }}
                    type="file"
                    id="imageFile"
                    name="imageFile"
                    onChange={imageUpload}
                  />
                  <AddToPhotosIcon />

                  <h4>Add photos/videos</h4>
                  <p>or drag and drop</p>
                </div>
                <div className="add">
                  <i class="fas fa-mobile-alt"> </i>
                  <small>Add photos from your mobile device</small>

                  <span>
                    <button className="btn btn-light">Add</button>
                  </span>
                </div>
              </div>
              <div className="postBtn">
                <button className="btn" onClick={SavePost}>
                  Post
                </button>
              </div>
            </div>
          </Modal>

 {/* ### friendList section #### */}

          <Link exact to="/signin/home/friendlist">
            <li>
              <i class="fas fa-users"></i>
            </li>
          </Link>
        </ul>

  {/* ### profile & logout section #### */}
        <ul className="profile mx-5">
          <div className="profilePic">
            <Link exact to="/signin/home/profile">
              <img src={Dp} />
            </Link>
            <span className="mx-3">{`${localUser.fname}`}</span>
          </div>
          <li className="logout" onClick={removeUser}>
            logout
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
