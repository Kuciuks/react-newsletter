import NewsComponent from "./NewsComponent"
import '../Styles/Content.css'
import { useNewsData } from "../Provider/NewsDataContext"

export default function Content(){

    const newsData = useNewsData()
    
    return(
        <div className="content-container">
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