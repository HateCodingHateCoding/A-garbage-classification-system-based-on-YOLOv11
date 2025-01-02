import { useNavigate } from "react-router"; 
// import { useEffect } from "react";
import { useState } from "react";
import "./User.scss";
import PostImg from "@/components/PostImg/PostImg";
import ShowImg from "@/components/ShowImg/ShowImg";

function User() {
  const [imageURL, setImageUrl] = useState<string | null>();
  // const [showImg, setShowImg] = useState(false);

  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/');
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      <img className="background-img" src="../public/assets/c115ad9504a35bece27815fbc5bb53fd_720.jpg" alt="" />  
      <div className="container">
        <div className="title">
          <div className="background"></div>
          垃 圾 分 类 系 统
        </div>
        <div className="post-column">
          <div className="background1">
            <PostImg  setImageUrl={setImageUrl} />
          </div>
        </div>
        <div className="user-show-table">
          <div className="table-column">
            <ShowImg imageUrl={imageURL} />
        </div>
      </div>
        <button className="quit" onClick={handleLogout}>退出登录</button>
      </div>
    </>
  )
}
  
export default User;