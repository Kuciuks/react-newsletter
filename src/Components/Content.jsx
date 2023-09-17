import NewsComponent from "./NewsComponent"
import '../Styles/Content.css'

export default function Content({newsList}){
    return(
        <div className="content-container">
            <div className="articles-container">
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