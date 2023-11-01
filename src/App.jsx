import './Styles/App.css'
import {Route, Routes} from 'react-router-dom'
import SelectArticle from "./Components/SelectArticle.jsx"
import NewsUpload from './Components/NewsUpload.jsx'
import NewsDataProvider from './Provider/NewsDataContext'
import SearchBar from './Components/SearchBar.jsx'
import ContentManager from './Components/ContentManager'
import SearchResults from './Components/SearchResults'
import { useState } from 'react'

function App() {

    const [results, setResults] = useState([])

    const updateResults = (update)=>{
        setResults(update)
    }

    console.log(results)

    return(
        <div className='app-container'>
            <NewsDataProvider>
                <SearchBar updateResults={updateResults}/>
                <Routes>    
                    <Route exact path='/' element={<ContentManager/>}/>
                    <Route path='news/:id' element={<SelectArticle/>}/>
                    <Route path='news/upload' element={<NewsUpload/>}/>
                    <Route path='news/search' element={<SearchResults results={results}/>}/>
                </Routes>
            </NewsDataProvider>
        </div>
    )
}

export default App
