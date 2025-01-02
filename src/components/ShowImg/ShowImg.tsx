import "./ShowImg.scss"

function ShowImg({ imageUrl }: { imageUrl: string | null | undefined }) {
    console.log(imageUrl);
    return (
        <div className="show-img">
            {imageUrl && <h2> 分类结果</h2>}
            {imageUrl && <img className="res-img" src={imageUrl} alt="Uploaded Image" />}
        </div>
    )
}

export default ShowImg;