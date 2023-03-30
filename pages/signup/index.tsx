import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
const Signup = () => {
    const router = useRouter()
    const { user, signup } = useAuth()
    const [data, setData] = useState({
      email: '',
      password: '',
    })
    const handleSignup= async (e: any) => {
        e.preventDefault()
    
        console.log(user)
        try {
          await signup(data.email, data.password)
          router.push('/dashboard')
        } catch (err) {
          console.log(err)
        }
      }
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <form onSubmit={handleSignup}>
      <label>
        Email:
        <input type="email" name="email" value={data.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={data.password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Signup