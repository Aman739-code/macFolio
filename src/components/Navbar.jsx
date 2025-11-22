import { navIcons, navLinks } from '#constants'
import React from 'react'
import dayjs from 'dayjs'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className='font-bold'>Aman's Portfolio</p>

            <ul>
                {navLinks.map(({name, id}) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>
            <time>{dayjs().format('ddd D MMM h:mm A')}</time>
        </div>
    </nav>
  )
}

export default Navbar
