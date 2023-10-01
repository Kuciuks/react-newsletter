import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';



export default function Content(){

    const dataList = useNewsData()
    const useData = useRef(null)

    useEffect(()=>{
        useData.current = dataList
    },[dataList])

    const renderArticles = (type)=>{

        let articleList = []

        // console.log(currentData.length,' currentData')
        // console.log(useData.current.length,' usedata')

        switch(type){
            case 'article':
                articleList = call(9)

                break;
        }
        return(
            articleList.map((item,index)=>(
                <div className='article-div' key={index}>
                    <Articles item={item}/>
                </div>
            ))
        )
    }


    const call = (num)=>{
        let arr = []
        arr = useData.current.splice(0,num);
        console.log(arr)
        return arr
    }
    return(
        <div className='content-container'>
            <div className='articles-container'>
                {useData.current !== null ? renderArticles('article') : <div>Loading...</div>}
            </div>
            <div className='articles-container'>
                {useData.current !== null ? renderArticles('article') : <div>Loading...</div>}
            </div>
            <div className='articles-container'>
                {useData.current !== null ? renderArticles('article') : <div>Loading...</div>}
            </div>
        </div>
    )

}