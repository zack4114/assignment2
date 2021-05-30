import React from 'react'
import ListingItem from './listing-item';
import {ListingSection as ListingSectionWrapper, SeperatorBar} from './styled-component';

function ListingSection({data}) {
    const {heading, subHeading, listData} = data
    return (
        <ListingSectionWrapper>
            <h2>{heading}</h2>
            <h4>{subHeading}</h4>
            <SeperatorBar/>
            <div className="item-container">
                {listData.map(item => <ListingItem key={item.id} data={item}/>)}
            </div>
        </ListingSectionWrapper>
    )
}

export default ListingSection
