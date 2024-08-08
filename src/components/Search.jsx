import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
    return (
        <div className='flex justify-center py-10'>
            <div className='flex items-center space-x-8 bg-gray-50 p-5 rounded-full'>
                <div className='flex items-center space-x-5'>
                    <FaLocationDot />
                    <select className='bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200'>
                        <option value="">Selecione um país</option>
                        <option value="US">Estados Unidos</option>
                        <option value="CA">Canadá</option>
                        <option value="GB">Reino Unido</option>
                    </select>
                </div>
                <div>
                    <select className='bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200' >
                        <option value="">Selecione a Fabricante</option>
                        <option value="US">Toyota</option>
                        <option value="CA">Honda</option>
                        <option value="GB">Ford</option>
                    </select>
                </div>
                <div>
                    <select className='bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200'>
                        <option value="">Selecione o modelo</option>
                        <option value="US">x</option>
                        <option value="CA">xy</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search