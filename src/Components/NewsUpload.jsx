import {useForm} from 'react-hook-form'

export default function NewsUpload(){

    const {register, handleSubmit, formState:{errors}} = useForm()

    const handleUpload = async (form)=>{
        const copy = {
            ...form,
            id: crypto.randomUUID()
        }


        const response = await fetch("")



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


            <label htmlFor='picture'>Upload picture</label>
            <input type='file' {...register("file",{
                required: "Required field!"
            })}/>
            <p>{errors.file?.message}</p>

            <button type='submit'>Submit</button>
        </form>
    )   
}