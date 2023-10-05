import {Link} from 'react-router-dom'
import '../Styles/Featured.css'

export default function Featured({item}) {

    const adjustTitle = (string) => {
        if(string.length > 20){
            let newString = string.slice(0,20)
            return newString
        }else{
            return string
        }   
    }


  return (
    <Link to={`/news/${item.id}`} className='featured-link-div'>
        <div className='featured-title-div'>
            <span>•</span>
            <span>{adjustTitle(item.title)}</span>
            <span>•</span>
        </div>
    </Link>
  )
}
