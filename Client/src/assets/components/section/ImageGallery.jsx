import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../sass/layout/_gallery.scss'

const ImageGallery = () => {
    const images = [
        'src/assets/images/being-heard.jpg', 
        'src/assets/images/choice.jpg',
        'src/assets/images/stop-violence.jpg']; // Reemplaza estas URLs con las de tus imágenes

    return (
        <div className="image-gallery">
            <Carousel autoPlay interval={3000} infiniteLoop useKeyboardArrows dynamicHeight showThumbs={false}>
                {images.map((url, index) => (
                    <div key={index}>
                        <Zoom>
                            <img src={url} />
                        </Zoom>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageGallery;
