import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ( { id, title, url }) => {

    return (
        <div className='card'>
            {/* Muestra la imagen y el título del gif */}
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {}
