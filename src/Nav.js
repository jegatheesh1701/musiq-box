import React from 'react';


const Nav = () => {

    return (
        <nav className='w-screen fixed top-0  flex justify-between items-center bg-black'>
            <div>  
                <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M703.90625 865.90625l-39.9375-15.65625 148.6875-380.0625c6.84375-17.53125-2.4375-37.3125-20.34375-43.125l-260.0625-84.9375c-16.6875-5.4375-34.6875 3.1875-40.875 19.59375L361.8125 704.46875l-61.40625-23.15625 181.875-481.125c6.09375-16.21875 23.8125-24.84375 40.40625-19.78125l389.0625 120.1875c18.1875 5.625 27.84375 25.5 20.90625 43.3125l-199.125 509.0625c-4.6875 11.71875-17.90625 17.53125-29.625 12.9375z" fill="#360682" /><path d="M241.0625 658.15625m-129.375 0a129.375 129.375 0 1 0 258.75 0 129.375 129.375 0 1 0-258.75 0Z" fill="#360682" /><path d="M614.375 802.90625m-129.375 0a129.375 129.375 0 1 0 258.75 0 129.375 129.375 0 1 0-258.75 0Z" fill="#360682" /><path d="M246.53333333 379.36666667L142.43333333 118.66666667c-6.8-16.9 2.4-36 19.8-41.3l107.9-32.9c14.4-4.4 29.7 2.5 36 16.2l13.2 28.8c7.5 16.3-0.9 35.4-17.9 41l-73.7 24.3c-6.9 2.3-10.5 9.9-7.8 16.6L290.33333333 350.96666667c2.1 5.4-0.5 11.4-5.9 13.6l-37.9 14.8z" fill="#E51C5A" /><path d="M211.53333333 379.36666667m-84.8 0a84.8 84.8 0 1 0 169.6 0 84.8 84.8 0 1 0-169.6 0Z" fill="#E51C5A" /></svg>
            </div>
            
            <div className='items-center ml-10 hidden md:block'>
                <svg width="40px" height="40px" viewBox="0 0 16 16" fill="#FF1493" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="#FF1493" />
                </svg>
            </div>
            
        
            <div className="flex flex-grow justify-center">
                <form className='flex items-center border border-gray-300 rounded-lg bg-gray-400 w-[75%]'>
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#FF1493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search here"
                        className="px-4 py-2 w-50 rounded-lg focus:outline-none placeholder-black bg-slate-400"
                    />
                </form>
            </div>

           
           
        </nav>
    )
}

export default Nav;