import './Styles/App.css'
import {Route, Routes} from 'react-router-dom'
import NewsArticle from "./Components/NewsArticle.jsx"
import API from './Components/API'
import NewsDataProvider from './Provider/NewsDataContext'

function App() {
    return(
        <NewsDataProvider>
            <Routes>    
                <Route exact path='/' Component={API}/>
                <Route path='news/:id' Component={NewsArticle}/>
            </Routes>
        </NewsDataProvider>
    )
}

export default App
