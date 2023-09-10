import './Styles/App.css'
import {Route, Routes} from 'react-router-dom'
import NewsArticle from "./Components/NewsArticle.jsx"
import Content from './Components/Content'
import NewsDataProvider from './Provider/NewsDataContext'
import SearchBar from './Components/SearchBar.jsx'

function App() {
    return(
        <NewsDataProvider>
            <SearchBar/>
            <Routes>    
                <Route exact path='/' Component={Content}/>
                <Route path='news/:id' Component={NewsArticle}/>
            </Routes>
        </NewsDataProvider>
    )
}

export default App
