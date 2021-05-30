import React from 'react'
import {SeperatorBar, TNCSectionWrapper} from './styled-component';

function TNCSection({data}) {
    const {heading,listItems=[] } = data;
    return (
        <TNCSectionWrapper>
            <h3>{heading}</h3>
            <SeperatorBar/>
            <ul>
                {listItems.map((item, index) => <li key={index.toString()}>{item.text}</li>)}
            </ul>
        </TNCSectionWrapper>
    )
}

export default TNCSection