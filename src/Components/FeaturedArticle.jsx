import placeholder from '../assets/placeholder.png'

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
                <div className="title-div"></div>
                <div className="source-div"></div>
                <div className="date-div"></div>
            </div>
        </div>
    )
}