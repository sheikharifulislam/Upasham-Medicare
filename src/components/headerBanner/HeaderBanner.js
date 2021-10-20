import React, {useEffect, useState} from 'react';
import leftButton from '../../images/slider-icon/left-arrow-angle.png';
import rightButton from '../../images/slider-icon/right-arrow-angle.png';
import './headerBanner.css';

const HeaderBanner = () => {

    const [slideData, setSlideData] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateSlideData, setUpdateSlideData] = useState({});
  

    useEffect(() => {
        fetch('/sliderData.json')
        .then((response) => response.json())
        .then((data) => setSlideData(data))
        .catch((error) => console.log(error.message))
    },[]);

    const handeRightButton = () => {
        if(slideIndex < slideData.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
        else {
            setSlideIndex(0)
        }
    }

    const handelLeftButton = () => {
        if(slideIndex > 0) {
            setSlideIndex(slideIndex - 1)
        }
        else {
            setSlideIndex(slideData.length - 1);
        }
        
    }

    setInterval(() => {
        if(slideIndex < slideData.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
        else {
            setSlideIndex(0)
        }
    }, 5000);

    useEffect(() => {
        setUpdateSlideData(slideData[slideIndex]);
    }, [slideData, slideIndex])    


    return (
       <div className="header-bottom">
           <div className="header-banner">
              <div className="header-banner-image">
                  <img src={updateSlideData?.imageUrl} alt="" />
              </div>
              <div className="header-banner-text">
                   <div className="banner-text-container">
                        <h1>{updateSlideData?.sliderTitle}</h1>
                        <p>{updateSlideData?.sliderText}</p>
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
