import '../Styles/Content.css'
import Articles from "./Articles"

export default function Content({newsList}){
    return(
        <div className="content-container">
            <div className="articles-container">
                {newsList ? newsList.map((item, index) => (
                    <div className="article-div" key={index}>
                        <Articles item={item}/>
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