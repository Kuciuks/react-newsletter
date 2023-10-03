import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import { useNewsData } from '../Provider/NewsDataContext';

export default function Content(){

    const dataArray = useNewsData()
    const randomArr = [10,14]

    if(!dataArray){
        return (<div>Loading..</div>)
    }
    
    return(
        <div className='articles-container'>
            {dataArray.map((item,index)=>{


                if(index < 9){
                    return(
                        <div className='article-div' key={item.id}>
                            <Articles item={item}/>
                        </div>
                    )
                }

                if(index%randomArr[Math.floor(Math.random()*randomArr.length)] === 0){
                    return(
                        <div className='article-div' key={item.id}>
                            <Banner item={item}/>
                        </div>
                    )
                }
                return(
                    <div className='article-div' key={item.id}>
                        <Articles item={item}/>
                    </div>
                )    
            
            })
                
                
                }
                

        </div>
    )
}