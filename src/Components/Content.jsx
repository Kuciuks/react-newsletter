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

            <div className='banner-container'>
                    {/* Fetching banners from the API*/}
            </div>

            <div className='headlines-container'>
                    {/* Fetching articles from the API similar to articles-container */}
            </div>

            <div className='headlines-container'>
                    {/* Fetching articles from the API similar to articles-container */}
            </div>

            {/* other variations of newslist item layout/styling in a container */}
        </div>
    )
}