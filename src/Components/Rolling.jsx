import { useEffect, useRef, useState } from 'react'
import '../Styles/Rolling.css'

export default function Rolling() {

    const [width, setWidth] = useState(0)
    const div = document.getElementById('rolling')

    let currentWidth = 0
    let content = ''
    const text = '| LATEST NEWS |'

    useEffect(()=>{
        if(div){
            const width = div.offsetWidth
            setWidth(width)
        }
    },[div])

    if(width !== 0){
        console.log(width,"start")

        while(currentWidth < width){
            console.log("add")
            currentWidth += 150
            content += ` ${text} `

        }
        console.log(currentWidth,"finished")
        div.innerText = content

    }

}
