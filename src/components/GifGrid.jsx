import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div>
      <div className="title-category">
        <h2>{category.toUpperCase()}</h2>
      </div>

      {isLoading && <h3>Cargando....</h3>}

      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} item={gif} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;

//jcgp