import React, {useMemo} from 'react'
import {HeaderWrapper} from './styled-component';
import Button from './button';

function Header({data}) {
    const {image, description} = data;
    const buttonData = useMemo(() => ({
        type: 'RED_BUTTON',
        onClick: ()=>{},
        label:'VIEW COLLECTION'
    }),[])
    return (
        <HeaderWrapper>
            <img src={image} alt="header"/>
            <div className="detail-container">
                <p>{description}</p>
                <Button data={buttonData}/>
            </div>
        </HeaderWrapper>
    )
}

export default Header
