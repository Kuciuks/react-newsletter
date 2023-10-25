import { useNewsData } from "../Provider/NewsDataContext"
import { useRef, useState } from "react"
import '../Styles/SearchBar.css'
import { Link, useNavigate } from "react-router-dom"

export default function SearchBar(){

    const newsData = useNewsData()
    const[news, setNews] = useState(null)
    const inputRef = useRef()

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/news/search')// navigating to the search output component
        const searchTerm = inputRef.current.value.trim().toLowerCase()

        const filteredNews = newsData.filter((article) => article.source.toLowerCase().includes(searchTerm))

        setNews(filteredNews)
    }

    return(
        <>
            <div className="search-container">
                <div className="bar-container">
                    <input className="input-field" ref={inputRef} placeholder="Search articles by author"></input>
                    <button className="btn" onClick={handleClick}>Search</button>
                    <Link to='/news/upload'>Upload</Link>
                </div>
            </div>
        </>
        
    )
}