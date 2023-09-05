import '../Styles/NewsComponent.css'

export default function NewsComponent({key,item}){
    return(
        <div key={key} className="news-container">
            <h1 className="news-title">{item.title}</h1>
            <h2 className="news-author">-{item.author}</h2>
        </div>
    )
}