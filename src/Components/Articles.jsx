import '../Styles/Articles.css'
import {Link} from 'react-router-dom'

export default function Articles({item}){

    const adjustTitle = (string) => {
        if(string.length > 30){
            let newString = string.slice(0,30)
            return newString
        }else{
            return string
        }   
    }


    return(
        <Link to={`/news/${item.id}`} className='link-div'>
            <div className='img-div'>
                <picture>
                    <source srcSet={item.placeholder_img + `?lock=1`}/>
                    <img className='img' src={item.placeholder_img + `?lock=1`} />
                </picture>
            </div>
            <div className='text-container'>
                <div className='title-div'>
                    <p className="title">{adjustTitle(item.title)}</p>
                </div>
                <div className='details-div'>
                    <div className='source-div'>
                        <p className="source">{item.source}</p>
                    </div>
                    <div className='date-div'>
                        <p className='date'>date</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}