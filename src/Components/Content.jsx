import { useDebugValue, useEffect, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';

export default function Content(){

    const dataArray = useNewsData()
    const useData = useRef(null)


    useEffect(()=>{
        useData.current = dataArray
    },[dataArray])


    const renderContainers = (type) => {
            let articleList = []

            switch(type){
                case 'article':
                    console.log(type,' call')
                    articleList = useData.current.slice(0,9)
                    useData.current.splice(0,9)

                    return(
                        articleList.map((item,index)=>(
                            <div className='article-div' key={index}>
                                <Articles item={item}/>
                            </div>
                        ))
                    )

                case 'banner':
                    console.log(type,' call')

                break;

                default:
                    console.log('Call name not recognized - ',type, '\n useData length: ',useData.current.length)
            }
    }

    


    console.log('useData length: ',useData.current)



    return(
        <div className="content-container">
            <div className='articles-container'>
                {useData.current === null ? <div>Loading...</div> : renderContainers("article")}
            </div>

            <div className='articles-container'>
                {useData.current === null ? <div>Loading...</div> : renderContainers("article")}
            </div>
        </div>
    )
}