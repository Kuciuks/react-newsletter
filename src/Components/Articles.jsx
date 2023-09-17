import '../Styles/Articles.css'
import {Link} from 'react-router-dom'

export default function Articles({item}){

    const adjustTitle = (string) => {
        if(string.length > 20){
            let newString = string.slice(0,20)
            return newString
        }else{
            return string
        }   
    }

    

    const handleResize = () => {
        const articles = document.querySelectorAll('.link-div')
        const windowWidth = window.innerWidth

        if(windowWidth < 600){ //add class 
            for(let i = 3; i < articles.length; i++){
                articles[i].classList.add('flex-layout')
            }    
        }else{
            for(let i = 3; i < articles.length; i++){
                articles[i].classList.remove('flex-layout')
            }    
        }
        
    }
    window.addEventListener("resize", handleResize)

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
                <div className='source-div'>
                    <p className="source">{item.source}</p>
                </div>
                <div className='date-div'>
                    <p>date div area</p>
                </div>
            </div>
        </Link>
    )
}