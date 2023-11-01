import React from 'react'
import { Link } from 'react-router-dom'

export default function ResultArticle({article}) {
  return (
    <Link>
        <div>{article.source}</div>
    </Link>
  )
}
