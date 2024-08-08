import React from 'react'
import NavBar from '../components/NavBar'
import { Link, useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'

import { FaStar } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Details = ({ cars }) => {

    const { carId } = useParams()
    const selectedCar = cars.find((car) => car.id === Number(carId))

    const images = [selectedCar.image, selectedCar.image, selectedCar.image]
    return (
        <div>
            <NavBar />
            <div className='w-11/12 md:w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between md:space-x-10'>
                <div className='md:w-1/2 space-y-5'>
                    <p className='text-lg'>
                        <Link to='/'>Home</Link> {'>'} Carros {'>'} <span className='font-semibold text-indigo-500'>Detalhes</span>
                    </p>
                    <h1 className='text-4xl font-bold'>{selectedCar.model}</h1>
                    <h1 className='text-3xl font-bold text-indigo-500'>${selectedCar.price}</h1>
                    <ImageSlider images={images} />
                </div>
                <div className='md:w-1/2 flex flex-col justify-between p-4'>
                    <div className='py-5 border-b space-y-2'>
                        <h1 className='text-2xl font-semibold'>Classificação & Avaliações</h1>
                        <div className='flex space-x-5 items-center'>
                            <div className='flex items-center space-x-1 text-amber-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p><span className='font-bold'>4.8</span>(140 avaliações)</p>
                        </div>
                    </div>

                    <div className='py-5 border-b space-y-2 '>
                        <h1 className='text-2xl font-semibold'>Cores</h1>
                        <div className='flex space-x-5 items-center'>
                            <div className='w-6 h-6 rounded-full bg-blue-500'></div>
                            <div className='w-6 h-6 rounded-full bg-red-500'></div>
                            <div className='w-6 h-6 rounded-full bg-black'></div>
                        </div>
                    </div>

                    <div className='py-5 border-b space-y-2'>
                        <h1 className='text-2xl font-semibold'>Descrição</h1>
                        <p className='text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo repellat modi qui accusamus ut ea perferendis
                            maxime quam culpa inventore consequatur nesciunt,
                            delectus nobis sit alias id eaque vero optio at quod, eius voluptatibus doloribus.
                        </p>
                    </div>

                    <div className='py-5 border-b space-y-2 flex justify-between'>
                        <h1 className='md:text-2xl font-semibold'>{selectedCar.model}</h1>
                        <p>Comprar</p>

                        <button className='w-48 px-8 py-2 flex justify-between items-center rounded-md bg-indigo-500 text0-white'>
                            <span className='text-xl font-bold'>${selectedCar.price}</span>{' '}
                            <span className='p-1 bg-white/20 rounded-lg'>
                                <IoIosArrowRoundForward size={24} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details