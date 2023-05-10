import React from 'react';
import './index.css';
import me from '../utils/C/me4.png';

export default function Head() {
    return (
        <div id="head" className='container mt-5 pt-4'>
            <div className='row aboutme'>
                <div className='col-5 img-side'>
                    <div className='profile'>
                        <img src={me} alt='me' />
                    </div>
                </div>
                <div className='col-6 description'>

                    <h2>Francisco Murillo</h2>
                    <h3 className='text-info'> Frontend Developer</h3>
                    <div className="m-3">

                        <p className="text-black text-start lh-base">
                            Self-taught person, Passionate about software development,
                            focused on creating websites with technologies such as
                            {" "}
                            <small className="text-info">
                                JavaScript, React Js, Node Js, Bootstrap, Material-ui, React Router,
                            </small>
                            among others. Enthusiast of digital development and lover of art and technology.
                        </p>
                        <p className="text-black text-start lh-base">

                            I am constantly learning to create clean, efficient and accessible code for both web and mobile applications.
                            My experience includes the development of websites and mobile applications in personal projects.
                            I focus on ensuring a great user experience across all devices,
                            working collaboratively with designers and other developers to achieve project goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
