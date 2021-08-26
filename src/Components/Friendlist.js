import React from "react";
import Dp from "./img/mypic.jpeg";

const friendList = [
  { imgSrc: Dp, name: "Daisy" },
  { imgSrc: Dp, name: "Vishal" },
  { imgSrc: Dp, name: "Nishant" },
  { imgSrc: Dp, name: "Pradeep" },
];

const Friendlist = () => {
  return (
    <div className="friendList">
      <div className="friendbox">
        
          {friendList.map((item, id) => {
            return(
            <div className="friendbox1">
              <img className="friendImg" src={item.imgSrc} alt="dp" />
              <h1 className="mx-5">{item.name} </h1>
              <div className="ActionBtn">
                <button className="btn btn-primary">Confirm</button>
                <button className="btn btn-danger">Delete</button>
              </div>
              </div>
            
          )}
          )}
       
      </div>
    </div>
  );
};

export default Friendlist;
