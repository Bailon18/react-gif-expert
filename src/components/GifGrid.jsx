import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ( { category } ) => { 

    // Custom Hook para obtener los gifs de una categoría
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>
            {/* Mensaje de carga mientras los gifs se obtienen */}
            { isLoading && (<h2> Cargando ...</h2>)}
            
            {/* Grid para mostrar las imágenes obtenidas */}
            <div className='card-grid'>
                {
                    images.map( ( image )  => (
                        <GifItem 
                            key={ image.id } 
                            { ...image } // Pasa las props (id, title, url) al componente GifItem
                        />
                    ))
                }
            </div>        
        </>
    )
}

GifGrid.propTypes = {}
