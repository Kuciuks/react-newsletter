import NewsComponent from "./NewsComponent"
import FeaturedArticle from "./FeaturedArticle"
import '../Styles/Content.css'

export default function Content({newsList}){

    
    return(
        <div className="content-container">
            <div className="featured-article-div">
                <FeaturedArticle/>
            </div>
            <div className="other-articles-div">
                {newsList ? newsList.map((item, index) => (
                    <div className="article-div" key={index}>
                        <NewsComponent item={item}/>
                    </div>
                ))
                :
                (
                    <h1>Loading..</h1>
                )}
            </div>
        </div>
    )
}