import { useEffect, useRef } from 'react';
import './register.css'
import useRegister from '../../store/registerStore';
import { useAuth } from '../../context/AuthContext';

function Register () {
  const {addUser, createUserMjs, setCreateUserMjs } = useAuth()
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
        setCreateUserMjs(null);
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
		const email = formData.get("email")

    addUser(name, password, email)
    
		form.reset()
  }


  return (
    <>
    {isRegisterOpen && 
    <div className="signIn_mainContainer">
    <div ref={signInRef} className="container">
      <h1>Create new account</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div className="form-control">
          <input name='username' type="text" required />
          <label ref={usernameLabelRef}>Username</label> 
        </div>
        <div className="form-control">
          <input name='email' type="text" required />
          <label ref={emailLabelRef}>Email</label> 
        </div>

        <div className="form-control">
          <input name='password' type="password" required/>
          <label ref={passwordLabelRef}>Password</label>
        </div>

        <button className="btn">Create</button>
      </form>
        {createUserMjs && <p>{createUserMjs}</p>}
    </div>
  </div>
    }
    
    </>
    
  )
}

export default Register