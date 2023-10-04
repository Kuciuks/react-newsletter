
import { useRef } from "react"
import { useNewsData } from "../Provider/NewsDataContext"
import Content from "./Content"


export default function ContentManager() {

    const dataArray = useNewsData()
    const layoutCount = useRef(0)


    let articleArray = []


    if(!dataArray){
        return <div>Loading...</div>
    }
    
    else{
        layoutCount.current = Math.floor(dataArray.length / 16) // get the possible count of layouts
        let start = 0; // start index
        let end = 16; // end index 

        for(let i = 0; i < layoutCount.current; i++){ // loop over the possible layout count
                
            const articles = (dataArray.slice(start, end)) // get articles off of the dataArray
            articleArray.push(articles) // push select articles for the current layout into an array
            // console.log('first layout array: ',articles.length)
            start = end; // set the starting count to the end count
            end = end + 16 // increase end count by 16
                
        }

        console.log(articleArray)

        return(
            <div className="container">
                {
                articleArray.map((item,index)=>(
                    <div className="content-container" key={index}>
                        <Content array={item}/>
                    </div>
                ))}
            </div>
        )
    }
    
    
}
