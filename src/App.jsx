import './Styles/App.css'
import {Route, Routes} from 'react-router-dom'
import SelectArticle from "./Components/SelectArticle.jsx"
import NewsUpload from './Components/NewsUpload.jsx'
import NewsDataProvider from './Provider/NewsDataContext'
import SearchBar from './Components/SearchBar.jsx'
import ContentManager from './Components/ContentManager'

function App() {
    return(
        <div className='app-container'>
            <NewsDataProvider>
                <SearchBar/>
                <Routes>    
                    <Route exact path='/' Component={ContentManager}/>
                    <Route path='news/:id' Component={SelectArticle}/>
                    <Route path='news/upload' Component={NewsUpload}/>
                </Routes>
            </NewsDataProvider>
        </div>
    )
}

export default App
