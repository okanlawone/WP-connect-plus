import { getDocs, collection} from "firebase/firestore"
import { database } from "../../config/firebase"
import { useEffect, useState } from "react"
import { Post } from "./posts"

export interface Post {
  id: string,
  userID: string,
  title: string,
  username: string,
  description: string
}
export const Main = () => {
  const [postsList, setPostLists] = useState<Post[] | null>(null)
  const postsRef = collection( database, "posts")

  const getPosts = async () =>{
    const posts = await getDocs(postsRef)
    setPostLists(posts.docs.map((doc)=> ({...doc.data(), id: doc.id})) as Post[])
  }
  useEffect( ()=> {
  getPosts()
 }, [])
  return (
    <>
    {postsList?.map((post)=>
    <Post post={post} />
    )}
    </>
  )
}