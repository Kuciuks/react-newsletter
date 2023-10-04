import {Link} from 'react-router-dom'
import '../Styles/Featured.css'

export default function Featured({item}) {
  return (
    <Link to={`/news/${item.id}`} className='featured-link-div'>
        <div className='featured-title-div'>• {item.title}</div>
    </Link>
  )
}
