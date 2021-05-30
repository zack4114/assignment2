import React from 'react'
import {Button as ButtonWrapper, RedButton, OutlineButtonWrapper} from './styled-component';

function Button({data}) {
    const {type='WHITE_BUTTON', onClick=()=>{}, label, icon,label2} = data

    switch(type) {
        case 'WHITE_BUTTON':
            return <ButtonWrapper onClick={onClick}>
                {label}
            </ButtonWrapper>
        case 'RED_BUTTON':
            return <RedButton  onClick={onClick}>
                {label}
            </RedButton>
        case 'OUTLINE_BUTTON':
            return <OutlineButtonWrapper>
                {!!icon && icon}
                <div>
                    <span>{label}</span>
                    {!!label2 && <span>{label2}</span>}
                </div>
            </OutlineButtonWrapper>
        default:
            return null
    }
}

export default Button
