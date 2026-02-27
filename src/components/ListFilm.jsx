import React from 'react'
import temp_1 from "./../assets/temp-1.jpeg"
const ListFilm = ({title}) => {
  return (
    <div className='my-container text-white bg-black pt-5'>
      <h2 className='font-bold uppercase'>{title}</h2>
      <div className='mt-5 relative w-[250px] h-[350px]' >
        <img src={temp_1} alt="pic-film" className='absolute top-0 w-full h-full' />
        <p className='absolute bottom-0 text-2xl w-full h-full'>Nghe nói em thích tôi</p>
      </div>
    </div>
  )
}

export default ListFilm
