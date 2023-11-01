import { Link } from 'react-router-dom'
import '../Styles/ResultArticle.css'

export default function ResultArticle({article}) {
  return (
    <Link to={`/news/${article.id}`} className='result-link-container'>
        <div className='result-pic-div'>
            <picture>
                <source srcSet={article.placeholder_img}/>
                <img className='result-img' src={article.placeholder_img}/>
            </picture>
        </div>
        <div className='result-title'>
            <h2>{article.title}</h2>
        </div>
        <div className='result-source'>
            <p>{article.source}</p>
        </div>
    </Link>
  )
}
