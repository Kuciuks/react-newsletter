import { useEffect, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';

export default function Content(){


    const newsData = useNewsData(); //call the provider to get the news from the api
    const dataRef = useRef(null) // a ref for storing the list of articles (updating it does not cause a re-render)

    useEffect(()=>{ //updates the datarRef when the fetch for news is complete
        dataRef.current = newsData
    },[newsData])


    
    const handleDataRequest = (type) => { // take a type of request
        let articleList = [];
        switch(type){ // loop over the types of type requests
            case 'banner':
                if(dataRef.current.length >= 1){
                    articleList = dataRef.current.slice(0, 1)
                    dataRef.current = dataRef.current.slice(1)
                    // console.log(articleList,'banner list', dataRef)

                    return(
                        articleList.map((item, index) => (
                            <div className='banner-div' key={index}>
                                <Banner item={item}/>
                            </div>
                        ))
                    )
                }else{
                    console.error("not enough articles")
                }
            break;

            case 'article':
                if(dataRef.current.length >= 9){
                    
                    articleList = dataRef.current.slice(0, 9); //stores 9 articles in an array
                    dataRef.current = dataRef.current.slice(9) //removes the 9 articles from the main array

                    console.log(dataRef.current.length)
                    console.log(articleList)

                    return(
                        articleList.map((item, index) => (
                            <div className="article-div" key={index}>
                                <Articles item={item}/>
                            </div>
                        ))
                    )
                }else{
                    console.error("not enough articles")
                }

                break;

            case 'headline':
                articleList = dataRef.current.slice(0)
            break;
        }
    }




    return(
        <div className="content-container">


            <div className="articles-container">
                {dataRef.current != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div>

            <div className="articles-container">
                {dataRef.current != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div>

            <div className="articles-container">
                {dataRef.current != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div>

            {/* <div className='banner-container'>
                {data != null ? handleDataRequest("banner") : <h1>Loading...</h1>}
            </div> */}
            

            {/* <div className="articles-container">
                {data != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div> */}


            {/* <div className='headlines-container'>
                {data != null ? handleDataRequest('headline') : <h1>Loading...</h1>}
            </div> */}

            {/* <div className='headlines-container'>
            </div> */}
        </div>
    )
}