import { Link } from "react-router-dom";
import '../Styles/Banner.css'

export default function Banner({item}){

    return(
        <Link to={`/news/${item.id}`}>
            <div className='img-div'>
                <picture>
                    <source srcSet={item.placeholder_img + `?lock=1`}/>
                    <img className='img' src={item.placeholder_img + `?lock=1`} />
                </picture>
            </div>
        </Link>
    )
}