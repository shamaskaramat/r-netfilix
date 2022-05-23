import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useState } from 'react';
import  './Navbar.scss';

export const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(true)
    window.scroll=()=>{
        setIsScrolled(window.pageYOffset===0 ? false:true);
        return ()=>(window.onscroll=null)
    }
  return (
    <>
    <div className={isScrolled ? " navbar scrolled": "navbar"}>
        <div  className='container'>
            <div className='left'>
                <img  src="https://top10.netflix.com/images/logo.png" alt=""/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://images.pexels.com/photos/5773420/pexels-photo-5773420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <div className='profile'>
                <ArrowDropDown className='icon'/>
                <div className='options'>
                    <span>Setting</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
