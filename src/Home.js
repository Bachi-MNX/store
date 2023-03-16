import React from 'react'
import { Itemcard } from './Itemcard'
import Data from './Data'
import Slider from './Slider'

const Home = () => {
    return (
        <div>
            <Slider />
            <section className=' container'>
                <div className='row col-lg-12 justify-content-center'>
                    {Data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                kay={index}
                                item={item}
                            />
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default Home