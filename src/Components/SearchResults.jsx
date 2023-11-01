import { useState } from "react";
import ResultArticle from "./ResultArticle";
import '../Styles/SearchResults.css'

export default function SearchResults({results}) {



  return (
      <div className="search-result-container">
        {results.length !== 0 ? results.map((item,index)=>(
          <div className="result-item" key={item.id}>
            <ResultArticle article={item}/>
          </div>
        )):
        <div>Sorry, no results found!</div>
        }
      </div>
    )
}

