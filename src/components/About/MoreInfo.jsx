import React from 'react';

import { GoLocation } from 'react-icons/go';
import { BsCode } from 'react-icons/bs';
import { MdOutlineLanguage } from 'react-icons/md';

import { FeatureComponent } from '../utils/components/FeatureComponent';

const moreInfoAbountMe = [
      {
            id: 1,
            title: "Tech:",
            info: "JavaScript | C# | SQL Server",
            icon: <BsCode />
      },
      {
            id: 2,
            title: "Location:",
            info: "El Progreso,Yoro Honduras",
            icon: <GoLocation />
      },
      {
            id: 3,
            title: "Language:",
            info: "Spanish (C2) | English (B1)",
            icon: <MdOutlineLanguage />
      },
]
const MoreInfo = () => {
      return (
            <nav className="p-3">
                  {moreInfoAbountMe.map(item => (
                        <div key={item.id}>
                              <FeatureComponent id={item.id} icon={item.icon} title={item.title} info={item.info} classnameD="text-white" />
                        </div>
                        // <nav className=' d-flex justify-content-center border-bottom border-white   mt-3  ms-2 nav nav-pills ' key={item.id}>
                        // <a className="nav-link  bg-black my-1 p-3 m-2" href="#item-3-1">{item.icon}</a>
                        // <div>
                        // <small className="text-start text-white">
                        // {item.title}
                        // </small>
                        // <p className="text-white">
                        // {item.info}
                        // </p>
                        // </div>
                        // </nav>
                  ))}
            </nav>
      )
}

export default MoreInfo;