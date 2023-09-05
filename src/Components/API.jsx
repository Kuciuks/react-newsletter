import { useEffect, useState } from "react"
import NewsComponent from "./NewsComponent"
import '../Styles/API.css'

export default function API(){

    const [newsData, setNewsData] = useState(null)


    useEffect(()=>{
        fetch('/api?access_key=9062d7ec08b53d8893c65680f9d7ad5b') //proxy server endpoint
        .then((result) => {
            if(!result.ok){
                throw new Error(`Network response was not ok, status: ${result.status}`)
            }
            return result.json()
            
        })
        .then(data => setNewsData(data))
        .catch(error => console.log(error))
    },[])

    console.log(newsData)
    
    
    return(
        <div className="api-container">
            {newsData ? newsData.data.map((item, index) => (
                <NewsComponent key={index} item={item}/>
            ))
            :
            (
                <h1>Loading..</h1>
            )}
            
        </div>
    )
}