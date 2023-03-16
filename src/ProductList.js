import React from 'react'
import { Itemcard } from './Itemcard'
import Data from './Data'
import Slider from './Slider'

const ProductList = () => {
    return (
        <div>
            <Slider />
            <section className=' container'>
                <div className='row col-lg-12 justify-content-center'>
                    {Data.productData.slice(0, 12).map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                id={item.id}
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

export default ProductList

// import axios from 'axios'
// import { Itemcard } from './Itemcard'
// import Data from './Data'
// import { useState, useEffect } from 'react'
// import Slider from './Slider'


// const ProductList = () => {

//     const [storeProducts, setStoreProduct]  = useState([])
    
  
//     const getData = async () => {
//       const {data} = await axios.get(Data.productData)
  
//       if(data){
//         setStoreProduct(data)
//       }
//     }
  
//     useEffect(() =>{
//       getData()
//     }, [])
  
//     return (
//     <>
//      <Slider />
//       <div className='page'>
//       <section className='container'>
//         <div className='row gap-4 '>
//            { 
//             storeProducts.slice(0, 9).map(({id, title, img, price, inCart, category}) => {
//                 return(
//                   <Itemcard 
//                   title={title} 
//                   img={img} 
//                   price={price}  
//                   id={id}
//                   inCart={inCart} />
//                 )
//             })
//            }
//         </div> 
//       </section>
//     </div>
//     </>
//     )
//   }
//   export default ProductList  
  
  