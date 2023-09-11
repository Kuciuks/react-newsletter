import {useForm} from 'react-hook-form'

export default function NewsUpload(){

    const {register, handleSubmit, formState:{errors}} = useForm()

    const handleUpload = async (form)=>{
        try{
            const copy = {
                ...form,
                id: crypto.randomUUID(),
                time: Date.now(),
                imgPlaceholder: "Yomama",
                image: "Yomama2"
            }
            // console.log(JSON.stringify(copy))
    
            const response = await fetch(`https://64fdc429596493f7af7e896d.mockapi.io/news`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(copy)
            })
    
            response.ok ? console.log("Data successfully sent to the API")
            :
            console.error("Error sending data to the API")
            
        }
        catch(error){
            console.error("Error: ",error)
        }
    }

    return(
        <form onSubmit={handleSubmit(handleUpload)}>

            <label htmlFor='author'>Author (Your full name)</label>
            <input id='author' {...register("author",{
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Using invalid symbols!"
                },
                required: "Required field!"
            })}/>
            <p>{errors.author?.message}</p>


            <label htmlFor="title">Title</label>
            <input id="title" {...register("title",{
                pattern: {
                    value: /^[A-Za-z0-9\s]+$/,
                    message: "Using invalid symbols!"
                },
                minLength: {
                    value: 10,
                    message: "The title must be longer than 10 characters!"
                },
                required: "Required field!"
            })}/>
            <p>{errors.title?.message}</p>


            <label htmlFor='article'>Write your article here:</label>
            <textarea id='article' {...register("article",{
                minLength: {
                    value: 200,
                    message: "The article must be longer than 200 characters!"
                },
                required: "Required field!"
            })}/>
            <p>{errors.article?.message}</p>

{/* 
            <label htmlFor='image'>Upload picture</label>
            <input id="image" type='file' {...register("image",{
                required: "Required field!"
            })}/>
            <p>{errors.file?.message}</p> */}

            <button type='submit'>Submit</button>
        </form>
    )   
}