import React from 'react'
import { useCart } from 'react-use-cart';
import { useState } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Data from './Data'


const Details = (props) => {

  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

 

 const [state, setState] = React.useState([])
    var location = useLocation()

    var { id } = queryString.parse(location.search)

    React.useEffect(() => {
      Data.productData.map(item => {
        if (item.id == id) {
          setState(item);
        }
      });
    }, [id]);
    

 

    const handleAddToCart = () => {
      addItem({
        id: state.id,
        price: state.price,
        quantity: 1,
        img: state.img,
        title: state.title
      });
      setAddedToCart(true);
    }
    

  

  return (
    <div>
     
            
           
                  <div className='main-detail-cont'>
                  <div className='left-detail-cont'>
                    <div className='detaili-photo-cont'>
                      <img src={state?.img} />
                    </div>
                  </div>
                  <div className='right-detail-cont'>
                    <p>{state?.title}</p>
                   <div className='price-cont'>
                    <p>{`Price: $${state?.price}`}</p>
                    </div>
                    <div className='main-color-memory-cont'>
                      <div className='main-color-cont'>
                        <p>Color:</p>
                        <div className="color-item" >
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                          </div>
                      </div>
                    </div>
                    <div class="product-cart-container">
                        <div class="add-cart-box">
                        {
                        addedToCart ?
                        <Link className='link' to="/cart"><button className=' go-to-cart-2'>Go to Cart</button></Link>
                        :
                        <button className='card-button' onClick={handleAddToCart}>Add to cart</button>
                        }
                        </div>
                        <div class="by-product">
                          <span><strong>Boy Product</strong></span>
                        </div>
                      </div>
                  </div>
                  </div>
              
</div>
  )
}

export default Details

// import React from 'react'
// import axios from 'axios'
// import queryString from 'query-string'
// import { useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Data from './Data'


// const Details = (props) => {

//  const [state, setState] = React.useState([])
//     var location = useLocation()

//     var { id } = queryString.parse(location.search)

//     React.useEffect(() => {
//         fetch.Data. productData
//             .then(res => res.json())
//             .then(json => setState(json))
//     }, [])

//   return (
//     <div>
//     {
//         state.length > 0 ? state.map(item => {
//             if (item.id == id) {
//                 return (
//                   <div className='main-detail-cont'>
//                   <div className='left-detail-cont'>
//                     <div className='detaili-photo-cont'>
//                       <img src={item.img} />
//                     </div>
//                   </div>
//                   <div className='right-detail-cont'>
//                     <p>{item.title}</p>
//                    <div className='price-cont'>
//                     <p>{`Price: $${item.price}`}</p>
//                     </div>
//                     <div className='main-color-memory-cont'>
//                       <div className='main-color-cont'>
//                         <p>Color:</p>
//                         <div className="color-item" >
//                             <div className="circle1"></div>
//                             <div className="circle2"></div>
//                             <div className="circle3"></div>
//                             <div className="circle4"></div>
//                           </div>
//                       </div>
//                       <div className='main-memory-cont'>
//                         <p>Memory:</p>
//                         <button>128 GB</button>
//                         <button>256 GB</button>
//                         <button>512 GB</button>
//                         <button>1 TB</button>
//                       </div>
//                     </div>
//                     <div class="product-cart-container">
//                         <div class="add-cart-box">
//                           {
//                             item.inCart === false 
//                             ? 
//                             <button className='add-to-cart' >add to cart</button>
//                             : 
//                             <Link className='link' to="/cart"><button  className='add-to-cart'>Go to Cart</button></Link>
//                         }
//                         </div>
//                         <div class="by-product">
//                           <span><strong>Boy Product</strong></span>
//                         </div>
//                       </div>
//                   </div>
//                   </div>
//                 )
//             }
//         }) : ""
//     }
// </div>
//   )
// }

// export default Details