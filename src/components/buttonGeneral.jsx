import './buttonGeneral.css'

function ButtonGeneral ({title}){
  return (
    <div className='button_mainContainer'>
      <button>{title}</button>
    </div>
  )
}

export default ButtonGeneral