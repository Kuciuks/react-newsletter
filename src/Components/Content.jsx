import { useEffect, useRef } from 'react';
import '../Styles/Content.css'
import Articles from "./Articles"
import Banner from './Banner'

export default function Content({newsList}){

    // const [dataList, setDataList] = useState(null) //store the array of articles in a state
    const dataRef = useRef(null) // a ref for storing the list of articles (updating it does not cause a re-render)

    useEffect(()=>{ // update the state whenever the newslist array has data inside of it
        dataRef.current = newsList;
    },[newsList])
    // console.log(dataRef)


    const handleDataRequest = (type) => { // take a type of request
        let articleList = [];

        switch(type){ // loop over the types of type requests
            case 'banner':

                articleList = dataRef.current.slice(0, 1)
                dataRef.current = dataRef.current.slice(1)

                return(
                    articleList.map((item, index) => (
                        <div className='banner-div' key={index}>
                            <Banner item={item}/>
                        </div>
                    ))
                )

            case 'article':

                articleList = dataRef.current.slice(0, 9);
                dataRef.current = dataRef.current.slice(9)

                return(
                    articleList.map((item, index) => (
                        <div className="article-div" key={index}>
                            <Articles item={item}/>
                        </div>
                    ))
                )

            case 'headlines':

            break;
        }
    }





    return(
        <div className="content-container">
            <div className="articles-container">
                {dataRef.current != null ? handleDataRequest("article") : <h1>Loading...</h1>}
            </div>

            <div className='banner-container'>
                {dataRef.current != null ? handleDataRequest("banner") : <h1>Loading...</h1>}
            </div>

            <div className='headlines-container'>
                    {/* Fetching articles from the API similar to articles-container */}
            </div>

            <div className='headlines-container'>
                    {/* Fetching articles from the API similar to articles-container */}
            </div>
        </div>
    )
}