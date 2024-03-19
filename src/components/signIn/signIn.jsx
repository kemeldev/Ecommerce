import { useEffect, useRef } from 'react';
import './signIn.css'
import useSignIn from '../../store/signInStore';
import useRegister from '../../store/registerStore';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

function SignIn () {
  const {login, loginError, isLoggedIn, loggedUser} = useAuth()
  const {isSignInOpen, setSignInClose} = useSignIn()
  const {setRegisterOpen} = useRegister()
  const emailLabelRef = useRef(null);
  const passwordLabelRef = useRef(null);
  let signInRef = useRef(null)
  const navigate = useNavigate();

  useEffect(() => {
    const emailLabel = emailLabelRef.current;
    if (emailLabel) {
      emailLabel.innerHTML = emailLabel.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
    }

    const passwordLabel = passwordLabelRef.current;
    if (passwordLabel) {
      passwordLabel.innerHTML = passwordLabel.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
    }
  }, [isSignInOpen]);

  useEffect(()=> {
    let handler = (e)=>{
      if (signInRef.current && !signInRef.current.contains(e.target)) {
        setSignInClose();
      }
    } 
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  },[])


  const handleSubmit = (e) =>{
    e.preventDefault()
		const form = e.target
		const formData = new FormData(form)

		const name = formData.get("username") 
		const password = formData.get("password")

    login(name, password)

		form.reset()
  }

  useEffect(()=> {
    if(isLoggedIn){
      setSignInClose()
      if (loggedUser === "Admin") navigate("/Ecommerce/adminDashboard") 
    }
    
  },[isLoggedIn])

  return (
    <>
    {isSignInOpen && 
    <div className="signIn_mainContainer">
    <div ref={signInRef} className="container">
      <h1>Please Login</h1>
      <h3>Hi there! </h3>
      <p> Use these data to Login, or try to register a new account </p> 
      <h5>Regular User: </h5>
      <p> Username: KemelDev,  Password: Mock </p> 
      <h5>Admin: </h5>
      <p> Username: Admin,  Password: 1234 </p> 
      
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div className="form-control">
          <input name='username' type="text" required />
          <label ref={emailLabelRef}>Username</label> 
          
        </div>

        <div className="form-control">
          <input name='password' type="password" required/>
          <label ref={passwordLabelRef}>Password</label>
        </div>

        {loginError && <p>{loginError}</p>}
        <button className="btn">Login</button>

      </form>
        <p className="text">Don´t have an account? <span onClick={()=> {setSignInClose(),setRegisterOpen()}}>Register</span> </p>
    </div>
  </div>
    }
    
    </>
    
  )
}

export default SignIn