
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/bannar/img1.jpg'
import img2 from '../assets/bannar/img2.jpg'
import img3 from '../assets/bannar/img3.jpg'
import img4 from '../assets/bannar/img4.jpg'
import img5 from '../assets/bannar/img5.jpg'

const Banner = () => {
    return (
       <div  className="h-[500px] overflow-hidden">
         <Carousel >
            <div className="">
                <img  src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
          
        </Carousel>
       </div>
    );
};

export default Banner;