import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    // State para el valor del input
    const [inputValue, setinputValue] = useState( '' )

    // Actualiza el valor del input a medida que el usuario escribe
    const onInputChange = ( { target } ) => {
        setinputValue( target.value )
    }

    // Función que maneja el envío del formulario
    const onSubmit = ( event ) => {
        event.preventDefault()

        // Valida que el valor ingresado no sea demasiado corto
        if( inputValue.trim().length <= 1 ) return;

        // Llama la función para agregar una nueva categoría
        onNewCategory( inputValue )

        // Limpia el input después de agregar la categoría
        setinputValue( '' )
    }

    return (
        <form onSubmit={ onSubmit }>
            {/* Input para agregar nuevas categorías */}
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
