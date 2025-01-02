import { useState } from 'react';
import { postImg } from "@/utils/request"
import "./PostImage.scss"

function PostImage({ setShowImg, setImageUrl, setResImg }: { setShowImg: (show: boolean) => void, setImageUrl: (url: string) => void, setResImg: (res: string) => void }) {
    const [file, setFile] = useState<File | null>();
    const [showBtn, setShowBtn] = useState(true);
    

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;
        setFile(e.target.files[0]);
        setShowBtn(false);
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
            // console.log(tmpFormData.get("file"));
        }
        postImg("/api/image", tmpFormData).then(res => {
            const imgURL = URL.createObjectURL(res);
            setResImg(imgURL);
        }).catch(err => {
            alert(err);
        });
    }

    function handleFileWindow() {
        if (file) {
            setShowImg(true);
        }
        else {
            alert("请先选择图片!");
        }
    }
    

    return (
        <div className="column">
            <span className='characters'>请选择你要检测的图片:</span>
            {showBtn && <label className="input-file-button" htmlFor="upload-file"> 点击上传 </label>}
            <input className="input" type="file" id="upload-file" onChange={handleFileChange} />
            {
                file===null || file===undefined? null : <div className="file-name" onClick={handleFileWindow}>{file.name}(点击预览)</div>
            }
            <button className="post-btn" onClick={handlePostImg}>确认上传</button>
        </div>
    )
}

export default PostImage; 