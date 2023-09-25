import { Link } from "react-router-dom";

export default function Headline({item}){
    return(
        <Link to={`/news/${item.id}`}>
        
        </Link>
    )
}