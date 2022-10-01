
export const getGifs = async (category) => {
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5rykmr1xg1lXw8xE4s36PsM7cAjP7SWG&q=${category}&limit=${limit}`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  console.log(gifs)

  return gifs;

};

//jcgp