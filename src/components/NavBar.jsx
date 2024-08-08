import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='bg-white sticky top-0 z-40 py-5'>
            <div className='w-11/12 md:w-4/5 m-auto flex justify-between items-center'>
                <Link to='/'>
                    <h1 className='text-4xl font-bold'>ShoppingCar</h1>
                </Link>
                <ul className='hidden md:flex space-x-5 text-sm font-semibold cursor-pointer'>
                    <li>Home</li>
                    <li>Carros</li>
                    <li>Contato</li>
                    <li>Ajuda</li>
                </ul>
                <div className='flex items-center space-x-5'>
                    <button className='px-5 py-2 text-indigo-600 font-semibold'>Registrar</button>
                    <button className='px-5 py-2 border border-indigo-600 rounded-md text-indigo-600 font-semibold'>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar