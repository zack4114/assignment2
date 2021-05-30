import React from 'react'
import Button from './button'
import { ListingItemWrapper, Avatar } from './styled-component'

function ListingItem({data}) {
    const {avatarImage, description, itemImage, itemName} = data
    return (
        <ListingItemWrapper>
            <Avatar src={avatarImage}/>
            <p>
                {`${description}`}
            </p>
            <img className="item-image" alt="avatar" src={itemImage}/>
            <span className="item-name">
                {itemName}
            </span>
            <Button data={{
                label:'BUY NOW',
                onClick:()=>{},
            }}/>
        </ListingItemWrapper>
    )
}

export default ListingItem
