import { useParams } from "react-router-dom";
import { useNewsData } from "../Provider/NewsDataContext";
import '../Styles/SelectArticle.css'

export default function SelectArticle(){
    const {id} = useParams()
    const newsData = useNewsData()

    if(!newsData) return <div>Loading...</div>

    const article = newsData.find((item) => item.id === id)
    //console.log(article)
    return(
        <div className="select-container">
            <div className="select-image-container">
                <img className="select-img" src={article.placeholder_img + `?lock=1`}/>
            </div>

            <div className="select-title-container">
                <h1>{article.title}</h1>
            </div>

            <div className="select-article-container">
                <h3>{article.article}</h3>
            </div>

            <div className="select-data-container">
                <h4>{article.source}</h4>
                <h3>{article.time}</h3>
            </div>
        </div>
    )
}