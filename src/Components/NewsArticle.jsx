import { useParams } from "react-router-dom";

export default function NewsArticle(){
    const {id} = useParams()
    return(
        <div>{id}</div>
    )
}