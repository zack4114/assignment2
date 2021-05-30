import React from 'react'
import {FooterWrapper} from './styled-component';

function Footer({data}) {
    const {image} = data;
    return (
        <FooterWrapper>
            <img src={image} alt={'footer'}></img>
        </FooterWrapper>
    )
}

export default Footer
