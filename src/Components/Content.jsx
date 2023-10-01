import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';



export default function Content(){

    const dataList = useNewsData()
    const useData = useRef(null)
    let i = 0;
    useEffect(()=>{
        useData.current = dataList
    },[dataList])

    const renderArticles = (type)=>{
        console.log(i++)
        let articleList = []
        const currentData = [...useData.current]


        switch(type){
            case 'article':
                articleList = currentData.slice(0,9)
                console.log(articleList,'article list')
                useData.current = currentData.splice(9)
                // console.log(useData.current,'usedata inside')

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
    console.log(useData,'usedata outside')
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