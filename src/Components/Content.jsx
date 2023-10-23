import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'
import Featured from './Featured';
import Rolling from './Rolling';

export default function Content({array}){

    console.log(array)
    return(
        <>
            <div className='articles-container'>
                {array.map((item,index)=>{
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
                {array.map((item,index)=>{
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
                {array.map((item,index)=>{
                    if(index >=10 && index < 16){
                        return(
                            <div className='featured-div' key={item.id}>
                                <Featured item={item}/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='rolling-container'>
                <div className='rolling-div'>
                    <Rolling/>
                </div>
            </div>

        </>
    )
}