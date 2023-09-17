import placeholder from '../assets/placeholder.png'
import '../Styles/FeaturedArticle.css'

export default function FeaturedArticle(){
    return(
        <div className="featured-container">
            <div className="featured-picture-div">
                <picture>
                    <source srcSet={placeholder}/>
                    <img src={placeholder}/>
                </picture>
            </div>
            <div className="featured-text-div">
                <div className="title-div">
                    <p>This is a title text area</p>
                </div>
                <div className="source-div">
                    <p>source div area</p>
                </div>
                <div className="date-div">
                    <p>date div area</p>
                </div>
            </div>
        </div>
    )
}