import "./ShowImage.scss"

function ShowImage({ resImg }: { resImg: string | null | undefined }) {
    // console.log(resImg);
    return (
        <div className="show-img">
            <h2> 分类结果</h2>
            {resImg  && <img className="res-img" src={resImg} alt="Uploaded Image" />}
        </div>
    )
}

export default ShowImage;