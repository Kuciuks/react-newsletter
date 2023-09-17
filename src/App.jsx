import './Styles/App.css'
import {Route, Routes} from 'react-router-dom'
import SelectArticle from "./Components/SelectArticle.jsx"
import NewsUpload from './Components/NewsUpload.jsx'
import NewsDataProvider from './Provider/NewsDataContext'
import SearchBar from './Components/SearchBar.jsx'

function App() {
    return(
        <div className='app-container'>
            <NewsDataProvider>
                <Routes>    
                    <Route exact path='/' Component={SearchBar}/>
                    <Route path='news/:id' Component={SelectArticle}/>
                    <Route path='news/upload' Component={NewsUpload}/>
                </Routes>
            </NewsDataProvider>
        </div>
    )
}

export default App
