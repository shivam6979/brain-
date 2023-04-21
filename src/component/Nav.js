import React,{useState} from 'react'
import './Nav.css'
import  { dropdown } from './Dropdown.js'
import global from "../images/global.png";
import dots from '../images/9dots.png';
function Nav() {
    const [value, setValue] = useState("")

    function handleClick(){

    }
    console.log(dropdown)
  return (
    <>
        <div className='nav'>
            {/* <div> */}
           <div className='uber'>Uber</div>
           <input className='input' placeholder='search' type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            {/* <div className='dropdown' onClick={}>Company */}
                {dropdown.map((option,i)=>{
                    <div key={i} className='dropdown-items'>
                        <h1>hi -{option.name}</h1>
                    </div>
                })}
            {/* </div> */}
            <div className='safty'>Safety</div>
            <div className='help'>Help</div>
            <div className='language'><img src={global} alt='global'/>EN</div>
            <div className='products'><img src={dots} alt='dots'/>Products</div>
           <div className='login'>Login</div>
           <div className='signup'>signup</div>
        </div>
        {/* </div> */}
    </>
  )
}

export default Nav