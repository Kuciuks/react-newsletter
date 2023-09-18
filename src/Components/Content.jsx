import { useEffect, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"

export default function Content({newsList}){

    const [dataList, setDataList] = useState()//store the array of articles in a state, will use for altering the valeu alter on

    useEffect(()=>{
        setDataList(newsList)
    },[newsList])
    console.log(dataList)

    const handleDataRequest = (type) => {


        switch(type){
            case 'banner':
                
            break;

            case 'article':


            break;

            case 'headlines':

            break;
        }
    }





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
                {handleDataRequest('banner')}
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