export const getGifs = async ( category ) => {

    // URL de la API con la categoría y la clave API
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=waQvYa664YVuTI3UdiRIoQclwvHJRoDW`;
    
    // Hace una petición fetch a la API
    const response = await fetch( url );
    
    // Extrae la data del JSON obtenido
    const { data } = await response.json();

    // Mapea la data para extraer solo los campos necesarios
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    // Retorna los gifs transformados
    return gifs;
}
