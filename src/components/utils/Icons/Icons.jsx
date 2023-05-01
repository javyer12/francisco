import React from "react";
import Image from 'react-bootstrap/Image'

export default function Icons(props) {
      return (
            <Image
                  className={props.classname}
                  src={props.src}
                  alt={props.alt} />
      );
}