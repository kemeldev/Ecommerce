import { useEffect, useRef } from 'react';
import './signIn.css'
import useSignIn from '../../store/signInStore';
import useRegister from '../../store/registerStore';

function SignIn () {
  const {isSignInOpen, setSignInClose} = useSignIn()
  const {setRegisterOpen} = useRegister()
  const emailLabelRef = useRef(null);
  const passwordLabelRef = useRef(null);
  let signInRef = useRef(null)

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
  return (
    <>
    {isSignInOpen && 
    <div className="signIn_mainContainer">
    <div ref={signInRef} className="container">
      <h1>Please Login</h1>
      <h4>We´re currently working to implement this feature</h4>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label ref={emailLabelRef}>Email</label> 
          
        </div>

        <div className="form-control">
          <input type="password" required/>
          <label ref={passwordLabelRef}>Password</label>
        </div>

        <button className="btn">Login</button>

        <p className="text">Don´t have an account? <p onClick={()=> {setSignInClose(),setRegisterOpen()}}>Register</p> </p>
      </form>
    </div>
  </div>
    }
    
    </>
    
  )
}

export default SignIn