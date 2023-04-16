import React from 'react'
import Edit from '../imgs/edit.png'
import Delete from '../imgs/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/16317494/pexels-photo-16317494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" srcset="" />
                        </Link>
                        <img src={Delete} alt="" srcset="" />

                    </div>
                </div>

                <h1>Lorem, ipsum dolor sit amet consectetur</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet ea blanditiis? Enim neque incidunt libero, iste minus omnis ipsa eius, quibusdam ipsum veniam ullam, possimus corporis. Qui, cumque aliquam!</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single
