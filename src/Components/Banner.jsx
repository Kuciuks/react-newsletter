import { Link } from "react-router-dom";
import '../Styles/Banner.css'

export default function Banner({item}){
    const backgroundImageStyle = {
        backgroundImage: `url(${item.placeholder_img}?lock=1)`,
      };
    return(
        <Link to={`/news/${item.id}`} className="banner-link-div">
            <div className='banner-img' style={backgroundImageStyle}>
            </div>
            <div className="banner-details">
                <div className="banner-title">
                    <h1>{item.title}</h1>
                </div>
                <div className="banner-source">
                    <h3>{item.source}</h3>
                </div>
            </div>
            
        </Link>
    )
}