import { useNewsData } from "../Provider/NewsDataContext"
import { useEffect, useRef, useState } from "react"
import Content from "./Content"

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
        <div>
            <input ref={inputRef} placeholder="Search articles by author"></input>
            <button onClick={handleClick}>Search</button>
            <Content newsList={news}/>
        </div>
    )
}