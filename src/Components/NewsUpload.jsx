import {useForm} from 'react-hook-form'

export default function NewsUpload(){

    const {register, handleSubmit, formState:{errors}} = useForm()

    const handleUpload = ()=>{
        
    }

    return(
        <form onSubmit={handleSubmit(handleUpload)}>
            
            <label htmlFor="title">Title</label>
            <input id="title" {...register("title",{
                minLength: {
                    value: 10,
                    message: "The title must be longer than 10 characters"
                },
                required: "Required field!"
            })}/>
            <p>{errors.title?.message}</p>



            <button type='submit'>Submit</button>
        </form>
    )   
}