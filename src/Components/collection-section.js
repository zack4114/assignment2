import React, {useMemo} from 'react'
import { CollectionSectionWrapper } from './styled-component';
import Button from './button';

function CollectionSection({data}) {
    const {image, description} = data;
    const buttonData = useMemo(()=>({
        type: 'WHITE_BUTTON',
        label: 'VIEW COLLECTION',
        onClick: () => {}
    }),[])
    return (
        <CollectionSectionWrapper>
            <img src={image} alt="collection"/>
            <div className="detail-container">
                <p>{description}</p>
                <Button data={buttonData}/>
            </div>
        </CollectionSectionWrapper>
    )
}

export default CollectionSection
