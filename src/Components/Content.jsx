import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';

export default function Content(){

    const dataArray = useNewsData()

    if(!dataArray){
        return (<div>Loading..</div>)
    }
    
    return(
        <div className='content-container'>
            <div className='articles-container'>
                {dataArray.map((item,index)=>{
                    if(index < 9){
                        return(
                            <div className='article-div' key={item.id}>
                                <Articles item={item}/>
                            </div>
                            )
                        }
                    })
                }
            </div>
            <div className='banner-container'>
                {dataArray.map((item,index)=>{
                    if(index >= 9 && index <10){
                        return(
                            <div className='banner-div' key={item.id}>
                                <Banner item={item}/>
                            </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}