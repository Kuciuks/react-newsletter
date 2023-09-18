import { matchRoutes } from 'react-router-dom'
import '../Styles/Content.css'
import Articles from "./Articles"
import { useEffect, useState } from 'react'

export default function Content({newsList}){

    // create different types of object for each of the section-containers
    const [sectionCount, setSectionCount] = useState(null)
    console.log(sectionCount)

    useEffect(()=>{
        const randomNumber = Math.floor(Math.random() * 2) //set random number to a state
        setSectionCount(randomNumber)
    },[])



    const sectionTypeContainer = [ //section types
        {name: "Articles"},
        {name: "Banner"},
        {name: "Headlines"}
    ]

    const generateContent = () => { //generates sections

        for(let i = 0; i < sectionCount; i++){ //loop over each section

            const randomNumber2 = Math.floor(Math.random() * sectionCount) //generate a random number for the section
            
            switch(randomNumber2){ //switch method for rendering different types of sections
                case '1':
                    return(<Articles/>)
                break;

                case '2':
                    return(<Banner/>)
                break;

                case '3':
                    return(<Headlines/>)
                break;
            }
        }
    }
    

    console.log(newsList)
    newsList ? generateContent() : console.log("NUll")


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
            {/* use generateContent for this part */}
        </div>
    )
}