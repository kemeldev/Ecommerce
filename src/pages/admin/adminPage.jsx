import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './admin.css'
import { useEffect } from 'react'

export function AdminPage() {
  const {loggedUser} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if (loggedUser != "Admin") navigate("/Ecommerce")
  }, [])

  return(
    <>
      <div className='admin_mainContainer'>
        <h2>This page is under construction</h2>
        <h3>So far is just implementing a protected route  </h3>
        <h3>I invite you to discover the rest of the webpage 🚀 </h3>
      </div>
    </>
  )
}
export default AdminPage