import { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    // State para las imágenes y el estado de carga
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true );

    // Función para obtener las imágenes de la API
    const getImages = async () => {
        const newGifs = await getGifs( category );
        setImages( newGifs );
        setIsLoading( false );
    }

    // Efecto que se ejecuta al montar el componente
    useEffect(() => {
        getImages();
    }, []); // [] se asegura de que solo se ejecute una vez

    return {
        images: images,
        isLoading: isLoading
    }
}
