import "./User1.scss"
import InfoColumn from "@/components/InfoColumn/InfoColumn";
import PostImage from "@/components/PostImage/PostImage";
import ShowImage from "@/components/ShowImage/ShowImage";
import { useState } from "react";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function User1() {
    const [imageURL, setImageUrl] = useState<string | null>();
    const [showImg, setShowImg] = useState(false);
    const [resImg, setResImg] = useState<string | null>();
  
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      }
    }, [navigate]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return; 
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="user1-page">
            <img className="back-img" src="../../../public/assets/d8bcfc9c889dc6f284d8a4a94048c9b7_720.jpg" alt="" />
            <div className="user1-container">
                <div className="user1-header">
                    <InfoColumn />
                </div>
                <div className="user1-content">
                    <div className="user-post">
                        <PostImage setShowImg={setShowImg} setImageUrl={setImageUrl} setResImg={setResImg} />  
                    </div>
                    <div className="user-show">
                        <ShowImage resImg={resImg} />
                    </div>
                </div>
            </div>
            <div className={classnames("postWindow", {"none": !showImg })}>
                <div className="black-back"></div>
                <div className="post-window">
                    {imageURL && <img src={imageURL} alt="" />}
                    <div className="opt">
                        <label className="change-file-button" htmlFor="upload-file"> 重新上传 </label>
                        <input className="input none" type="file" id="upload-file" onChange={handleFileChange} />
                        <button className="identify-btn" onClick={() => setShowImg(false)}>确认</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User1;