import React from 'react';

import { MdOutlineLanguage } from 'react-icons/md';


const moreInfoAbountMe = [
      {
            id: 3,
            title: "Language:",
            info: "Spanish (Nativo) | English (B1)",
            icon: <MdOutlineLanguage />
      },
]
const MoreInfo = () => {
      return (
            <React.Fragment >
                  {moreInfoAbountMe.map(item => (
                        <nav key={item.id} className=' p-2 d-block w-100 nav nav-pills'>
                              <small className='text-white text-center'>{item.title}</small>
                              <p className='text-white'>{item.info}</p>
                        </nav>
                  ))}
            </React.Fragment>
      )
}

export default MoreInfo;