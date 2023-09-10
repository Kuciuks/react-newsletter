import NewsComponent from "./NewsComponent"
import '../Styles/Content.css'

export default function Content({newsList}){

    
    return(
        <div className="content-container">
            {newsList ? newsList.map((item, index) => (
                <NewsComponent key={index} item={item}/>
            ))
            :
            (
                <h1>Loading..</h1>
            )}
            
        </div>
    )
}