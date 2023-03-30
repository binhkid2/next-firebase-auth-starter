
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
const Navbar = () => {
    const { user, logout } = useAuth()
    const router = useRouter()
  return (
<div>
    {user ? (
        <>
        
        <button onClick={() => {
            logout()
            router.push('/login')
          }}> Logout</button>
        </>

    ):(
        <>
        <Link href={"/signup"}> Signup</Link>
        <Link href={"/login"}> Login</Link>
        </>
    )}
    </div>
  )
}

export default Navbar