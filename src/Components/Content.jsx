import { useEffect, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"

export default function Content({newsList}){

    const [dataList, setDataList] = useState(null)//store the array of articles in a state, will use for altering the valeu alter on

    useEffect(()=>{
        setDataList(newsList)
    },[newsList])


    const handleDataRequest = (type) => {
        let articleList = []
        const newsListCopy = dataList
        console.log(newsListCopy)
        
        switch(type){
            case 'banner':
                articleList = newsListCopy.slice(1)
                setDataList(articleList)
                // return( )
            break;

            case 'article':
                articleList = newsListCopy.slice(9)
                setDataList(articleList)
                return(
                    articleList ? articleList.map((item, index) => (
                        <div className="article-div" key={index}>
                            <Articles item={item}/>
                        </div>
                    ))
                    :
                    (
                        <h1>Loading..</h1>
                    )
                )

            case 'headlines':

            break;
        }
    }





    return(
        <div className="content-container">
            <div className="articles-container">
                {/* {newsList ? newsList.map((item, index) => (
                    <div className="article-div" key={index}>
                        <Articles item={item}/>
                    </div>
                ))
                :
                (
                    <h1>Loading..</h1>
                )} */}
                {newsList != null ? handleDataRequest('article'): <h1>Loading</h1>}

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
        </div>
    )
}