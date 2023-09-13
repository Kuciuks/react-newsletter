import '../Styles/NewsComponent.css'
import {Link} from 'react-router-dom'

export default function NewsComponent({keyVal,item}){

    const adjustTitle = (string) => {
        if(string.length > 20){
            let newString = string.slice(0,20)
            return newString
        }else{
            return string
        }   
    }
    return(
        <div key={keyVal} className="news-container">
            <Link to={`/news/${item.id}`} className='link-div'>
                <div className='img-div'>
                    <img className='img' src={item.placeholder_img + `?lock=1`} />
                </div>
                <div className='text-div'>
                    <div className='title-div'>
                        <h1 className="title">{adjustTitle(item.title)}</h1>
                    </div>
                    <div className='author-div'>
                        <h2 className="author">-{item.author}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}