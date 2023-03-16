import axios from 'axios'
import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { Itemcard } from './Itemcard'
import Data from './Data'


function Searchpage() {
  const [data, setData] = React.useState([])

  const location = useLocation()

  const { key } = queryString.parse(location.search)

  const search = async () => {
    const matchingItems = Data.productData.filter(item =>
      item.title.toLowerCase().includes(key.toLowerCase())
    )
    setData(matchingItems)
  }

  React.useEffect(() => {
    search()
  }, [key])

  return (
    <div className='page'>
      <section className='container'>
        <h1>
          found {data.length} result{data.length !== 1 ? 's' : ''} for{' '}
          <mark>{key}</mark>
        </h1>
        <div className='row gap-4 '>
          {data.map(item => (
            <Itemcard
              key={item.id}
              item={item}
              title={item.title}
              img={item.img}
              price={item.price}
              id={item.id}
              inCart={item.inCart}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Searchpage






// import axios from 'axios'
// import React from 'react'
// import queryString from 'query-string'
// import { useLocation } from 'react-router-dom'
// import { Itemcard } from './Itemcard'
// import Data from './Data'

// function Searchpage() {
//     const [data, setData] = React.useState([])

//     const location = useLocation()

//     const { key } = queryString.parse(location.search)

//     const search = async () => {
//         const { data } = await axios.get.Data.productData
//         if (data) {
//             var items = []
//             data.map(item => item.title.toLowerCase().includes(key.toLowerCase()) ? items.push(item) : "")
//             setData(items)
//         }
//     }

//     React.useEffect(() => {
//         search()
//     }, [key])

//     return (
//                 <div className='page'>
//                 <section className=' container'>
//                 <h1>found {Data.productData.length} result for <mark>{key}</mark></h1>
//                 <div className='row gap-4 '>
//                 {
//                     data ? Data.productData.map(item => (
//                         // <Link className='link' to={`/view?&id=${item.id}`}>
//                         <Itemcard 
//                         title={item.title} 
//                         img={item.img} 
//                         price={item.price}  
//                         id={item.id}
//                         inCart={item.inCart} />
//                         // </Link>
//                     )) : ""
//                 }
//                     </div>
//                 </section>
//             </div>
//     )
// }

// export default Searchpage