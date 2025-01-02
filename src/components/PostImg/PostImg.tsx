import { useState } from 'react';
import { postImg } from "@/utils/request"
import "./PostImg.scss"

function PostImg({setImageUrl}: {setImageUrl: (url: string) => void}) {
    const [file, setFile] = useState<File | null>();
    // const [imageURL, setImageUrl] = useState<string | null>();
    

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;
        setFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }

    function handlePostImg() {
        if (!file) {
            alert("未选择图片!");
            return;
        }
        const tmpFormData = new FormData();
        if (tmpFormData.has("img")) {
            tmpFormData.delete("img");
        }
        if (file) {
            tmpFormData.append("file", file);
            console.log(tmpFormData.get("file"));
        }
        postImg("/api/image", tmpFormData).then(res => {
            const imgURL = URL.createObjectURL(res);
            setImageUrl(imgURL);
        }).catch(err => {
            console.log(err);
        });
    }

    function handleFileWindow() {
        if (file) {
            window.open(URL.createObjectURL(file));
        }
    }
    

    return (
        <div className="column">
            <span className='characters'>请上传图片:</span>
            <label className="input-file-button" htmlFor="upload-file"> 上传文件 </label>
            <input className="input" type="file" id="upload-file" onChange={handleFileChange} />
            {
                file===null || file===undefined? null : <div className="file-name" onClick={handleFileWindow}>({file.name})</div>
            }
            <button className="post-btn" onClick={handlePostImg}>确认上传</button>
        </div>
    )
}

export default PostImg; 