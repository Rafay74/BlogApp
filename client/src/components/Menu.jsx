import React from 'react'

const Menu = () => {


    const posts = [
        {
            id: 1,
            title: "lorem test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium at facere saepe nesciunt non molestias quisquam ea delectus est!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "lorem test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium at facere saepe nesciunt non molestias quisquam ea delectus est!",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "lorem test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium at facere saepe nesciunt non molestias quisquam ea delectus est!",
            img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 4,
            title: "lorem test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium at facere saepe nesciunt non molestias quisquam ea delectus est!",
            img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }
    ]
    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" srcset="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
