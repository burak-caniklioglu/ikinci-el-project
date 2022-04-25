import React from 'react'
import './Main.scss'
import MainBanner from '../../components/MainBanner/MainBanner'
import Navbar from '../../components/Navbar'
import Categories from '../../components/Categories/Categories'

function Main() {
  return (
    <>
      <Navbar />
      <main className='main-section'>
        <div className='main-container'>
          <figure className='main-banner'>
            <MainBanner />
          </figure>
          <Categories />
        </div>
      </main>
      
    </>
  )
}

export default Main