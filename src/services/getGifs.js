export const getGifs = async (category) => {

  // encodeURI sirve para escapar los espacios y funcionen en la url
  // reemplaza los espacios por %20, etc
  const url = `https://api.giphy.com/v1/gifs/search?api_key=mwuyQ2N93RY8sftl8bPtuArUotpkJPmk&q=${encodeURI(category)}&limit=10`

  const resp = await fetch(url)

  const { data } = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  // no regresa los gifs, regresa una promesa con la coleccion de gifs
  return gifs

}