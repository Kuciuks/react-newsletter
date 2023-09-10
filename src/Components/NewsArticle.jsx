import { useParams } from "react-router-dom";
import { useNewsData } from "../Provider/NewsDataContext";

export default function NewsArticle(){
    const {id} = useParams()
    const newsData = useNewsData()

    if(!newsData) return <div>Loading...</div>

    const article = newsData.find((item) => item.id === id)
    console.log(article)
    return(
        <div>
            <h1>{article.title}</h1>
            <h3>{article.article}</h3>
            <h4>{article.author}</h4>
            <h3>{article.time}</h3>
            <img src={article.image}/>
        </div>
    )
}