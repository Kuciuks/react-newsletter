import { useDebugValue, useEffect, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';

export default function Content(){

    const dataArray = useNewsData()
    const useData = useRef(null)
    const useRequestList = useRef(['article','article','article','article','banner','pizdabol'])


    useEffect(()=>{
        useData.current = dataArray
    },[dataArray])


    const renderContainers = (reqList) => {
        reqList.forEach(element => {
            let articleList = []
            let filteredArr = []

            switch(element){
                case 'article':
                    console.log(element,' call')
                    articleList = useData.current.slice(0,9)
                    
                    filteredArr = useData.current.splice(9)

                    useData.current = filteredArr

                    console.log(useData.current.length,' filtered arr')

                break;

                case 'banner':
                    console.log(element,' call')
                break;

                default:
                    console.log('Call name not recognized - ',element, '\n useData length: ',useData.current.length)
            }
        });
    }

    useData.current === null ? console.log("still loading...") : renderContainers(useRequestList.current)


    console.log('useData length: ',useData.current)



    return(
        <div className="content-container">
            <div className='articles-container'>
            </div>
        </div>
    )
}