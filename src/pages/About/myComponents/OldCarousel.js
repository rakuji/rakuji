import React from 'react';

import "../aboutStore.css";

const MyCarousel = () => {
    return (
        <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src={require("../images/slider01.png")} class="d-block w-100" alt="slider-1" />
                </div>
                <div class="carousel-item " data-bs-interval="3000">
                    <img src={require("../images/slider02.jpg")} class="d-block w-100" alt="slider-2" />
                </div>
                <div class="carousel-item " data-bs-interval="3000">
                    <img src={require("../images/slider03.jpg")} class="d-block w-100" alt="slider-3" />
                </div>
            </div>
        </div>
        
    )
  }
  
  export default MyCarousel