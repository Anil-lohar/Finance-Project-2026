import React from 'react'
import './Card.css'
type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src='https://images.unsplash.com/photo-1778470075441-8b2c7ce123b7?ixid=M3w4MjcwNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODY4NTUzMTh8&ixlib=rb-4.1.0&fit=max&q=80&auto=format' alt='Image'></img>
        <div className='details'>
            <h2>See random image</h2>
            <p>$110</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id sapiente porro quasi temporibus? Corporis debitis, adipisci culpa ut impedit, laudantium amet temporibus eum libero neque repellat provident aliquam beatae.
        </p>

    </div>
  )
}

export default Card