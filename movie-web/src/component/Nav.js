import React from 'react'
import { useDispatch  } from "react-redux";


const Nav = () => {
    const dispatch = useDispatch();
    const handleOnChange = (e) => {        
        dispatch({type:'Searching', data: e.target.value})
    }
    return (
        <div className="container">
            <nav className="navbar">
                <a className="logo" href="/">MOVIE SHOW</a>
                <div className="navbar-nav">
                    <form>
                        <input type="text" placeholder="Cari berdasarkan judul film " onChange={handleOnChange}/>                        
                    </form>
                </div>                
            </nav>
        </div>
    )
}

export default Nav
