import "./Carousel.css";

const CarouselItem = ({ item, index }) => {
  return (
    <div className={`carousel-item item${index}`}>
      <div className="content-wrapper">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <a href={item.link}>
          <button className="carousel-button">Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
