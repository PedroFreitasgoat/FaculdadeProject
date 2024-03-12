import React from 'react'
import './Campus.css'
import galerry_1 from '../../assets/gallery-1.png'
import galerry_2 from '../../assets/gallery-2.png'
import galerry_3 from '../../assets/gallery-3.png'
import galerry_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={galerry_1} alt="" />
            <img src={galerry_2} alt="" />
            <img src={galerry_3} alt="" />
            <img src={galerry_4} alt="" />
        </div>
        <button className='btn dark-btn'>Veja mais aqui <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
