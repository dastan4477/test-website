const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default CarouselItem;
