import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    marginTop: '20px',
    height: '500px',
    color: '#fff',
    justifyContent: 'center',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'black',
};

const Slider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <Carousel className='slider' afterChange={onChange} autoplay="true" dots={true} effect="fade" prevArrow={"DEded"}>
                <div>
                <h3 style={contentStyle}><img className='mm' src='https://assets-global.website-files.com/6179bd8bf2c3bb015c1fa461/624dbb46933c69b81ccfce56_61a2b403be97a960b4ae8b5f_aaathumbnail.png' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img className='mm' src='https://cdn.weartesters.com/wp-content/uploads/2023/01/Best-Nike-Volleyball-Shoes-800x450.png' /></h3>
                </div>
                <div className='slide_item_img'>
                <h3 style={contentStyle}><img className='mm' src='https://footwearnews.com/wp-content/uploads/2017/12/custom-made-nike.jpg?w=1024' /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img className='mm' src='https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/20181709/nike-sneakers-for-menn-1600x900.jpg' /></h3>
                </div>
        </Carousel>
    )
}
export default Slider