import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Footer from '../components/Footer'
import Cars from '../components/Cars'

const Home = ({ cars }) => {
    return (
        <div>
            <NavBar />
            <Search />
            <Cars cars={cars} />
            <Footer />
        </div>
    )
}

export default Home