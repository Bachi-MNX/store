import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { Card } from 'antd';
import axios from 'axios';
import { Itemcard } from './Itemcard';
import Data from './Data';

const { Meta } = Card;

function ByCategory() {

    const [data, setData] = React.useState([])

    const location = useLocation()

    const { category } = queryString.parse(location.search)

    const search = async () => {
        const items = []
        await Data.productData.map(item => {
            if(typeof item.category != "undefined"){
                if(item.category.toLowerCase().includes(category.toLowerCase()) ){
                    items.push(item)
                }
            }
        }
        )
        setData(items)
    }
    console.log(data)
    React.useEffect(() => {
        search()
    }, [category])

    return (
        <div className='page'>
             <div className='event-box'>
                <div className='event-cards'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/efb35f07-8f4e-42df-961f-c0548a8d516b/nike-just-do-it.jpg'/>
                    <p>Woman</p>
                </div>
                <div className='event-cards'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/14acc094-7a56-4843-95de-edb9679d90e4/nike-just-do-it.jpg'/>
                    <p>Man</p>
                </div>
                <div className='event-cards'>
                    <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/7befca3a-3f05-4d23-84d0-6e689a368923/nike-just-do-it.jpg' />
                    <p>Kids</p>
                </div>
            </div>
            <section className='container'>
                <div className='row gap-4'>
                    {
                        data?.map(item => (
                            <Itemcard
                                key={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                id={item.id}
                                inCart={item.inCart}
                                item={item}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default ByCategory




// import React from 'react'
// import queryString from 'query-string'
// import { useLocation } from 'react-router-dom'
// import { Card } from 'antd';
// import axios from 'axios';
// import { Itemcard } from './Itemcard';
// import Data from './Data';




// const { Meta } = Card;

// function ByCategory() {


//     const [data, setData] = React.useState([])

//     const location = useLocation()

//     const { category } = queryString.parse(location.search)

//     const search = async () => {
//         const { data } = await axios.get(Data.productData)
//         if (data) {
//             var items = []
//             data.map(item => item.category.toLowerCase().includes(category.toLowerCase()) ? items.push(item) : "")
//             setData(items)
//         }
//     }



//     React.useEffect(() => {
//         search()
//     }, [category])

//     return (
//         <div className='page'>
//         <section className=' container'>
//           <div className='row gap-4 '>
//         {
//               data ? Data.productData ?.map(item => (
//                         // <Link to={`/view?&id=${item.id}`}>
//                          <Itemcard 
//                           title={item.title} 
//                           img={item.img} 
//                           price={item.price}  
//                           id={item.id}
//                           inCart={item.inCart} />
//                           // </Link>
//                            )) : ""
//               }
//           </div>
//         </section>
//       </div>
//     )
// }

// export default ByCategory