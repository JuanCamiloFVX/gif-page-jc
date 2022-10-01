const GifItem = ({ item }) => {
  const { url, title } = item;
  return (
    <div className="card">
        <img src={url} />
        <div className="text">
          <p>{title}</p>
        </div>
    </div>
  );
};

export default GifItem;

//jcgp