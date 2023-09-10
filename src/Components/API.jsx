import NewsComponent from "./NewsComponent"
import '../Styles/API.css'
import { useNewsData } from "../Provider/NewsDataContext"

export default function API(){

    const newsData = useNewsData()
    
    return(
        <div className="api-container">
            {newsData ? newsData.map((item, index) => (
                <NewsComponent key={index} item={item}/>
            ))
            :
            (
                <h1>Loading..</h1>
            )}
            
        </div>
    )
}