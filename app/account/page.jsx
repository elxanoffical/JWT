import {cookies} from 'next/headers'
import { verifyJWT } from '@/lib/auth'

export default async function AccountPage() {
  const cookieStore =  await cookies()
  const token = cookieStore.get('token')?.value

  if(!token){
    return <p>You must be logged in to view this page.</p>;
  }

  try{
    const {payload} = await verifyJWT(token)
    return <>
      <h1>WELCOME to Accaunt page</h1>
      <h1>WASSUP {payload.username}</h1>
    </>
  }catch(error){
    return <p>Invalid or expired token. Please log in again.</p>;
  }
}