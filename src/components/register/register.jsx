import { useEffect, useRef } from 'react';
import './register.css'
import useRegister from '../../store/registerStore';

function Register () {
  const {isRegisterOpen, setRegisterClose} = useRegister()
  const emailLabelRef = useRef(null);
  const passwordLabelRef = useRef(null);
  const usernameLabelRef = useRef(null);
  let signInRef = useRef(null)

  useEffect(() => {
    const userLabel = usernameLabelRef.current;
    if (userLabel) {
      userLabel.innerHTML = userLabel.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
    }
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
  }, [isRegisterOpen]);

  useEffect(()=> {
    let handler = (e)=>{
      if (signInRef.current && !signInRef.current.contains(e.target)) {
        setRegisterClose();
      }
    } 
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  },[])
  return (
    <>
    {isRegisterOpen && 
    <div className="signIn_mainContainer">
    <div ref={signInRef} className="container">
      <h1>Create new account</h1>
      <h4>We´re currently working to implement this feature</h4>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label ref={usernameLabelRef}>Username</label> 
        </div>
        <div className="form-control">
          <input type="text" required />
          <label ref={emailLabelRef}>Email</label> 
        </div>

        <div className="form-control">
          <input type="password" required/>
          <label ref={passwordLabelRef}>Password</label>
        </div>

        <button className="btn">Create</button>

      </form>
    </div>
  </div>
    }
    
    </>
    
  )
}

export default Register