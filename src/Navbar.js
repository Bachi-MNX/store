import React from 'react';
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Menu from './Manu';

const Navbar = () => {
    const {
        totalUniqueItems,


    } = useCart();

   

      const [input, setInput] = React.useState('')
      const [data, setData] = React.useState([])
  
      const navigate = useNavigate()
  
      const search = async (event) => {
          const { data } = await axios.get.Data.productData
          if (data) {
              var items = []
              data.map(item => item.title.toLowerCase().includes(input.toLowerCase()) ? items.push(item) : "")
              setData(items)
          }
      }
      const gotoS = (event) => {
          if (event.keyCode === 13 && input != "") {
              navigate(`/search?&key=${input}`)
              setInput("")
          }
      }
      React.useEffect(() => {
          if (input !== "") {
              search()
          } else {
              setData([])
          }
      }, [input])
      const category = [
        {
          name: "New & Featured"
        },
        {
          name: "Man" 
        },
        {
          name: "Woman"
        },
        {
          name: "Kids"
        },
        {
          name: "AirPods"
        },
      ]

    return (
        <>
        <div className='nav-bar'>
            <Link to="/"><img className='logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBEHKOZxU7kYC2i5po_JqrXEXerc8I3fSDA&usqp=CAU'>
            </img></Link>
            <div className='nav-bar2'>
        <ul className='ctg'>
        {
          category.map(({ name }) => (
            <Link className='link-1' to={`/category?&category=${name}`}><span className='menu-list'>{name}</span> </Link>
          ))
         }
            </ul>
        </div>
            <div className='search-area'>
                <input value={input} onKeyDown={event => gotoS(event)} onInput={e => setInput(e.target.value)} type="search" placeholder='search here'/>
                <i class="bi bi-search"></i>
            </div>
            <div className='person-cart-icone-cont1'>
             <span><Link to="/cart"><i className="bi bi-bag"></i></Link><h5>{totalUniqueItems}</h5></span>
             <Link to="/login"><i class="bi bi-person-circle"></i></Link>
            </div>
            <div className='menu-cont'>
            <Menu />
            </div>
        </div>
        </>
    )
}

export default Navbar