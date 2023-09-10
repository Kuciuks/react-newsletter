import { useContext, useState, useEffect, createContext } from "react";

const NewsDataContext = createContext()

export default function NewsDataProvider({children}) {
    const [newsData, setNewsData] = useState()

    useEffect(()=>{
        fetch('https://64fdc429596493f7af7e896d.mockapi.io/news', {
            method: 'GET',
            headers: {'content-type':'application/json'}})
        .then((result) => {
            if(!result.ok){
                throw new Error(`Network response was not ok, status: ${result.status}`)
            }
            return result.json()
            
        })
        .then(data => setNewsData(data))
        .catch(error => console.log(error))
    },[])

    return(
        <NewsDataContext.Provider value={newsData}>
            {children}
        </NewsDataContext.Provider>
    )
}

export const useNewsData = () => useContext(NewsDataContext)

