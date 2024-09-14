import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // State para manejar las categorías de gifs
    const [categories, setcategories] = useState( [] )

    // Función para agregar una nueva categoría
    const onAddCategory = ( inputNewValue ) => {

        // Evita duplicar categorías
        if ( categories.includes( inputNewValue))  return;

        // Actualiza el estado de categorías, agregando la nueva al inicio
        setcategories( [ inputNewValue, ...categories ] )
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            {/* Componente para agregar nuevas categorías */}
            <AddCategory onNewCategory={ onAddCategory }/>

            {/* Mapea cada categoría y genera su respectivo GifGrid */}
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }
        </>
    )
}
