import { useNewsData } from "../Provider/NewsDataContext"
import { useEffect, useRef, useState } from "react"
import Content from "./Content"
import '../Styles/SearchBar.css'
import { Link } from "react-router-dom"

export default function SearchBar(){

    const newsData = useNewsData()
    const[news, setNews] = useState(null)
    const inputRef = useRef()

    useEffect(()=>{
        setNews(newsData)
    },[newsData])


    const handleClick = () => {
        
        const searchTerm = inputRef.current.value.trim().toLowerCase()

        const filteredNews = newsData.filter((article) => article.author.toLowerCase().includes(searchTerm))

        setNews(filteredNews)
    }

    return(
        <div className="search-container">
            <div className="bar-container">
                <input className="input-field" ref={inputRef} placeholder="Search articles by author"></input>
                <button className="btn" onClick={handleClick}>Search</button>
                <Link to='/news/upload'>Upload</Link>
            </div>
            {/* <Content newsList={news}/> call another component that renders the search results */}
        </div>
    )
}