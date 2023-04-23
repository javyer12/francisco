import React from 'react';

export function NextButton(props) {
      return (
            <React.Fragment>
                  <a type="button" href={props.destination}
                        className={props.classname}> {props.label}</a>
            </React.Fragment>
      )
}

export function ButtonLink(props) {
      return (
            <React.Fragment>
                  <a target="_blank" rel="noreferrer" type="button" href={props.destination}
                        className={props.classname}>{props.label}</a>
            </React.Fragment>
      )
}