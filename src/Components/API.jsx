import { useEffect, useState } from "react"

export default function API(){

    const [newsData, setNewsData] = useState(null)


    useEffect(()=>{
        fetch('http://api.mediastack.com/v1/news?access_key=9062d7ec08b53d8893c65680f9d7ad5b&keywords=tennis')
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
        <div>
            {newsData !== null && newsData.data.map((item, index) => (
                <div key={index}>
                    <h1>{item.author}</h1>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    )
}