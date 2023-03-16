import { Button, Drawer, Input } from 'antd';
import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Menu = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [input, setInput] = useState('')
    const [data, setData] = useState([])

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
        useEffect(() => {
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
            <div className='nav-hidden1' onClick={showDrawer}>
                <i class="bi bi-list"></i>
            </div>
            <Drawer className='nav-hidden-menu1' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            <input value={input} onKeyDown={event => gotoS(event)} onInput={e => setInput(e.target.value)} type="text" placeholder='search here'/>
                {
                category.map(({ name }) => (
                    <Link className='link-1' to={`/category?&category=${name}`}><span className='menu-list-2'>{name}</span> </Link>
                ))
                }
            </Drawer>
        </>
    );
};
export default Menu;