import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import Featured from './Featured';
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
            <div className='featured-container'>
                {dataArray.map((item,index)=>{
                    if(index >=10 && index < 16){
                        return(
                            <div className='featured-div' key={item.id}>
                                <Featured item={item}/>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}