import React, { JSX } from 'react'
import './Card.css'


interface Props {
  companyName?: string;
  ticker?: string;
  price?: number;
}


const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return (  
    <div className='card'>
        <img src='https://images.unsplash.com/photo-1778470075441-8b2c7ce123b7?ixid=M3w4MjcwNjd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODY4NTUzMTh8&ixlib=rb-4.1.0&fit=max&q=80&auto=format' alt='Image'></img>
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price?.toFixed(2)}</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id sapiente porro quasi temporibus? Corporis debitis, adipisci culpa ut impedit, laudantium amet temporibus eum libero neque repellat provident aliquam beatae.
        </p>

    </div>
  )
}

export default Card