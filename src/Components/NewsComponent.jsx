import '../Styles/NewsComponent.css'
import {Link} from 'react-router-dom'

export default function NewsComponent({key,item}){

    return(
        <div key={key} className="news-container">
            <Link to={`/news/${item.id}`}> 
                <h1 className="news-title">{item.title}</h1>
                <h2 className="news-author">-{item.author}</h2>
            </Link>
        </div>
    )
}