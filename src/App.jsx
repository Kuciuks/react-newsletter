import './Styles/App.css'
import {Route, Routes} from 'react-router-dom'
import NewsArticle from "./Components/NewsArticle.jsx"
import API from './Components/API'

function App() {
    return(
        <Routes>    
            <Route exact path='/' Component={API}/>
            <Route path='news/:id' Component={NewsArticle}/>
        </Routes>
    )
}

export default App
