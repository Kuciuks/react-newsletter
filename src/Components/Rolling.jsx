import { useEffect, useState } from 'react'
import '../Styles/Rolling.css'

export default function Rolling() {

    const [width, setWidth] = useState(0)
    const div = document.getElementsByClassName('rolling-container')
    const r_div = document.getElementsByClassName('rolling-div')

    let currentWidth = 0
    let content = ''
    const text = '| LATEST NEWS |'


    useEffect(()=>{
        const elements_div = Array.from(div)

        //set width state value by using first element in the list of elements_div (all of them will have the same width)
        if(elements_div != null){
            const element_width = elements_div[0].offsetWidth;
            setWidth(element_width)
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
        const elements_r_div = Array.from(r_div)
        elements_r_div.forEach(element => {
            element.innerText = content
        })

    }

}
