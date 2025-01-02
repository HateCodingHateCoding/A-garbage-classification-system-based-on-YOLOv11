import "./InfoColumn.scss"
import "@/inconfont/style.scss"
import { useNavigate } from "react-router-dom";

function InfoColumn() {
    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
    }
    return (
        <div className="info-column">          
            <img width={"100%"} src="../../../public/assets/image2.png" alt="" />
            <div className="info-content">
                <div className="back"></div>
                <h1><i className="iconfont icon-375"></i>拉风侠-垃圾分类系统</h1>
                <div className="term">
                    <li><i className="iconfont icon-xinxi"></i><span>团队信息</span></li>
                    <li><i className="iconfont icon-tuandui"></i><span>联系我们</span></li>
                    <li><i className="iconfont icon-jishufuwu"></i><span>技术实现</span></li>
                    <li><i className="iconfont icon-geren"></i><span onClick={handleLogout}>登出</span></li>
                </div>
            </div>
        </div>
    )
}

export default InfoColumn;