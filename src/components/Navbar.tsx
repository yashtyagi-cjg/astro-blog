//NOT USING Migrated this to Navabar.tsx and using it 
import { useState, useEffect } from "react";

function Navbar(){

    const [theme, setTheme] = useState(()=>{
        if(typeof window !== 'undefined'){
            return localStorage.getItem('theme') || 'cupcake'
        }else{
            return 'cupcake';
        }
    });
    useEffect(()=>{
        document.querySelector('html')?.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme);




        
    }, [theme])
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 30 30" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href='/'>Homepage</a></li>
                    <li><a href='/post/all'>Write Ups</a></li>
                    <li><a href='/blog'>Blog</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href='/' className="btn btn-ghost text-xl sm:text-2xl">Yash Tyagi</a>
            </div>
            <div className="navbar-end">
            <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <input type="checkbox" value="dark" 
                    onClick={()=>{
                        setTheme(prevTheme => prevTheme === 'cupcake' ? 'dark': 'cupcake')
                    }} className="toggle theme-controller"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    )
}


export default Navbar;