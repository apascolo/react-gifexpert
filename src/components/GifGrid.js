import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {


  const { data: images, loading } = useFetchGifs(category);



  return (
    <div className='cardGrid animate__animated animate__fadeIn'>
      <h3>{category}</h3>
      {
        loading ? <p className='animate__animated animate__flash'>Cargando!!</p> :
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img} />
          ))
      }

    </div>
  )
}

export default GifGrid