import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, database } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

interface CreateFormData {
  title: string
  description: string
}

export const CreateForm = ()=>{
  const [user]= useAuthState(auth)
  const navigate = useNavigate()
  const schema = yup.object().shape(
    {
      title: yup.string().max(25,"Title must be less than 25 characters").required("* Title is required"),
      description: yup.string().required("* Description is required"),
    }
  )

  const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(database, "posts")

  const onCreatePost = async (data: CreateFormData) =>{
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid
    }) 
    navigate("/")
  } 

  return(
    <form onSubmit={handleSubmit(onCreatePost)}>
      <div className="create-post">
        <img src="https://www.wpupioneers.com/images/logos/site/site.png" width="100" height="100" />
      <input placeholder="Title..." {...register("title")}/>
      <p style={{color: "red", fontSize: "10px"}}>{errors.title?.message}</p>
      <textarea placeholder="What are you thinking?..." {...register("description")} >hi</textarea>
      <p  style={{color: "red", fontSize: "10px"}}>{errors.description?.message}</p>
      <input id="submit-button" type="submit"/>
      </div>
    </form>
   
  )
}