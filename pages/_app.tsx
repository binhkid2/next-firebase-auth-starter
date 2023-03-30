import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../context/AuthContext'



const noAuthRequired = ['/', '/login', '/signup']
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <Navbar />
      
        <Component {...pageProps} />
     
    </AuthContextProvider>
  )
}
