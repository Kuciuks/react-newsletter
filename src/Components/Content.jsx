import { useEffect, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"

export default function Content({newsList}){

    const [dataList, setDataList] = useState(null) //store the array of articles in a state
    let dataCopy = dataList != null ? [...dataList] : []

    useEffect(()=>{ // update the state whenever the newsList array changes
        setDataList(newsList)
    },[newsList])



    // console.log(dataList)
    const handleDataRequest = (type) => {
        console.log(dataCopy.length)
        
        let articleList = [];

        switch(type){
            case 'banner':
            break;

            case 'article':
                articleList = dataCopy.slice(0, 9);
                dataCopy = dataCopy.slice(9)

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
                {dataList != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div>

            <div className='banner-container'>
                {dataList != null ? handleDataRequest("article") : <h1>Loading...</h1>}
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