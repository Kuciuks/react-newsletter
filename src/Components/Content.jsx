import { useEffect, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';

export default function Content(){

    const newsData = useNewsData() // fetching news from the API

    const dataRef = useRef(null) // a ref for storing the list of articles (updating it does not cause a re-render)
    const [data, setData] = useState(null)

    useEffect(()=>{ // update the state whenever the newslist array has data inside of it
        setData(newsData)    
        dataRef.current = newsData
    },[newsData])
    console.log(data)



    const handleDataRequest = (type) => { // take a type of request
        let articleList = [];

        switch(type){ // loop over the types of type requests
            case 'banner':

                articleList = dataRef.current.slice(0, 1)
                dataRef.current = dataRef.current.slice(1)

                return(
                    articleList.map((item, index) => (
                        <div className='banner-div' key={index}>
                            <Banner item={item}/>
                        </div>
                    ))
                )

            case 'article':

                articleList = dataRef.current.slice(0, 9);
                dataRef.current = dataRef.current.slice(9)

                return(
                    articleList.map((item, index) => (
                        <div className="article-div" key={index}>
                            <Articles item={item}/>
                        </div>
                    ))
                )

            case 'headlines':

            break;
        }
    }





    return(
        <div className="content-container">
            <div className="articles-container">
                {data != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div>

            <div className='banner-container'>
                {data != null ? handleDataRequest("banner") : <h1>Loading...</h1>}
            </div>

            <div className='headlines-container'>
                    {/* Fetching articles from the API similar to articles-container */}
            </div>

            <div className='headlines-container'>
                    {/* Fetching articles from the API similar to articles-container */}
            </div>
        </div>
    )
}