import CarouselItem from "./CarouselItem";
import { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="arrow-buttons">
        <button
          onClick={() => {
            updateIndex(currentIndex - 1);
          }}
          className="arrow-button"
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button
          onClick={() => {
            updateIndex(currentIndex + 1);
          }}
          className="arrow-button"
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div className="indicators">
        {items.map((item, index) => {
          return (
            <button
              onClick={() => {
                updateIndex(index);
              }}
              className="indicator-button"
            >
              <span class={`material-symbols-outlined `}>
                radio_button_checked
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
