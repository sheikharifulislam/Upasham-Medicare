import React, {useEffect, useState} from 'react';
import leftButton from '../../images/slider-icon/left-arrow-angle.png';
import rightButton from '../../images/slider-icon/right-arrow-angle.png';
import image from '../../images/slider-images/photo-1581093436589-a10193587f96.jpg';
import './headerBanner.css';

const HeaderBanner = () => {

    const [sliderData, setSliderData] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        fetch('/sliderData.json')
        .then((response) => response.json())
        .then((data) => setSliderData(data))
        .catch((error) => console.log(error.message))
    },[]);

    const handeRightButton = () => {
        setSlideIndex(slideIndex + 1);
        if(slideIndex === sliderData.length) {
            setSlideIndex(0);
        }
    }

    const handelLeftButton = () => {
        setSlideIndex(slideIndex - 1);
        if(slideIndex < 0 ) {
            setSlideIndex(sliderData.length - 1); 
        }
        
    } 
    

    


    return (
       <div className="header-bottom">
           <div className="header-banner">
              <div className="header-banner-image">
                  <img src={image} alt="" />
              </div>
              <div className="header-banner-text">
                   <div className="banner-text-container">
                        <h1>This is banner</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum saepe iste hic sunt officia! Expedita tempore natus maiores saepe maxime, ab non delectus, vel laboriosam quo, exercitationem numquam dolore sed.</p>
              </div>
                   </div>
              <div className="slide-change-button">
                <div className="slide-change-left-button">
                    <img src={leftButton} className="left-btn" alt=""  onClick={handelLeftButton}/>
                </div>
                <div className="slide-change-right-button">
                    <img src={rightButton} className="right-btn" alt="" onClick={handeRightButton}/>
                </div>
              </div>
           </div>
       </div>
    );
};

export default HeaderBanner;
