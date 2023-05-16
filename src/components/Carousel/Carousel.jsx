import CarouselItem from "./CarouselItem";
import {useState} from "react";
import "./Carousel.css"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

  const items = [
    {
      title: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pretium tellus. Fusce tempus sapien volutpat auctor volutpat.",
      link: "#Contact",
    },
    {
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pretium tellus. Fusce tempus sapien volutpat auctor volutpat.",
      link: "#Contact",
    },
    {
      title: "UX/UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pretium tellus. Fusce tempus sapien volutpat auctor volutpat.",
      link: "#Contact",
    },
  ];

  return (
    <div className="carousel">
      <div className="inner"
      style={{ transform: `translate(-${currentIndex * 100}%)`}}>
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
