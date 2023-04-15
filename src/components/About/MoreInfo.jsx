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
                        <nav key={item.id} className='ms-5 p-2 d-flex w-100 nav nav-pills'>
                              <div>
                                    <small className='text-white text-center'>{item.title}</small>
                                    <p className='text-white'>{item.info}</p>
                              </div>
                        </nav>
                  ))}
            </React.Fragment>
      )
}

export default MoreInfo;