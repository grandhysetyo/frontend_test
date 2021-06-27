import React from 'react'
import { useSelector } from "react-redux";
import HeaderContent from '../component/Header'
import ListMovie from '../component/ListMovie'


const Header = () => {
    const search = useSelector(state => state.search);
    console.log(search)
    if(search===''){
        return <HeaderContent />
    }
    return null
}
const Home = () => {    
    
    return (
        <div className="container">
            <Header />
            <ListMovie /> 
        </div>
    )
}

export default Home
