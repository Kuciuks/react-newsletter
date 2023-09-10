import { useEffect, useState } from "react"
import NewsComponent from "./NewsComponent"
import '../Styles/API.css'

export default function API(){

    const [newsData, setNewsData] = useState(null)
    

    useEffect(()=>{
        fetch('https://64fdc429596493f7af7e896d.mockapi.io/news', {
            method: 'GET',
            headers: {'content-type':'application/json'}})
        .then((result) => {
            if(!result.ok){
                throw new Error(`Network response was not ok, status: ${result.status}`)
            }
            return result.json()
            
        })
        .then(data => setNewsData(data))
        .catch(error => console.log(error))
    },[])

    
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