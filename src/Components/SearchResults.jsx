import { useState } from "react";

export default function SearchResults({results}) {



  return (
      <div className="result-container">
        {results.length !== 0 ? results.map((items,index)=>(
          <ResultArticle/>
        )):
        <div>Sorry, no results found!</div>
        }
      </div>
    )
}

