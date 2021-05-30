import styled from 'styled-components'

export const Button = styled.button`
    padding:12px 16px;
    border-radius:50px;
    min-width:100px;
    border:none;
    font-weight:bold;
    background-color:white;
    color: black;
    transition: all 300ms;
    cursor:pointer;
    text-transform:uppercase;
    &:hover {
        background-color: #ED3833;
        color: white;
    }
`

export const RedButton = styled(Button)`
    background-color:red;
    color: white;
    &:hover {
        background-color: white;
        color: black;
    }
`;

export const OutlineButtonWrapper = styled(Button)`
    border: 1px solid white;
    padding: 8px 16px;
    border-radius:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:white;
    transition: all 250ms;
    background-color:transparent;
    text-transform:none;
    svg {
        fill:white;
        margin-right:20px;
    }
    div {
        text-align:left;
        flex-direction:column;
    }
    span {
        margin:5px 0px;
        display: block;
    }
    &:hover {
        background-color:white;
        color:black;
        svg {
            fill: black;
        }
    }
`

export const Section = styled.section`
    padding:30px 40px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin:40px;
    margin-bottom:0px;
`

export const ListingSection = styled(Section)`
    background-color:#191919;
    h2 {
        color:#ED3833;
        margin-block-end:0;
        margin-block-start:0;
    }
    h4 {
        color: white;
        margin-block-start:0.5em;
        margin-block-end:1em;
    }
    .item-container {
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        align-items:center;
        margin-top:30px;
    }
`

export const TNCSectionWrapper = styled(Section)`
    background-color:#4B4B4B;
    align-items:flex-start;
    color:#FFF;
    ul{
        padding-inline-start:14px;
        text-align:left;
        list-style-type: decimal;
        font-size:0.8em;
    }
    li {
        margin-block-end: 5px;
    }
    h3 {
        margin-block-start:5px;
    }
`

export const ListingItemWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    max-width:350px;
    margin:20px;
    font-weight:600;
    color: white;
    padding:16px;
    p {
        font-size:0.9em;
    }
    .item-image {
        height:200px;
        width:300px;
        object-fit:contain;
    }
    .item-name {
        margin-bottom: 20px;
        font-size:0.8em;
    }
`

export const Avatar = styled.img`
    height:180px;
    width:180px;
    border: 5px solid #ED3833;
    border-radius:50%;
    object-fit: cover;
`

export const SeperatorBar = styled.div`
    height:2px;
    width:60px;
    background-color:white;
    border-radius:1px;
`

export const ContactDetailWrapper = styled(Section)`
    background-color: black;
    color:white;
    padding:30px 0px;
    align-items:flex-start;
    h3 {
        margin-block-start:0;
    }
    .description-container {
        p {
            max-width:50%;
            @media (max-width: 480px) {
                max-width:100%;
            }
            text-align:left;
        }
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:center;
        width: calc(100% - 1px);
        .button-container {
            flex-wrap:wrap;
            display:inherit;
            gap:12px;
        }
    }
`

export const CollectionSectionWrapper = styled(Section)`
    padding:0px;
    overflow:hidden;
    position:relative;
    align-items:flex-start;
    color:white;
    img {
        width:100%;
        height:auto;
        object-fit:cover;
    }
    .detail-container{
        position:absolute;
        height:100%;
        width:60%;
        justify-content:center;
        align-items:center;
        display:flex;
        font-size:1.5em;
        padding:30px;
        font-weight:600;
        flex-direction:column;
        p {
            max-width: 50ch;
        }
    }
`

export const FooterWrapper = styled.footer`
    img {
        width:100%;
        height:auto;
        margin-bottom:-3px;
    }
`

export const HeaderWrapper = styled.header`
    position:relative;
    color:white;
    overflow:hidden;
    img {
        width:100%;
        height:auto;
        margin-bottom:-3px;
    }
    .detail-container{
        position:absolute;
        height:100%;
        width:60%;
        // justify-content:flex-end;
        top:50%;
        align-items:center;
        display:flex;
        font-size:1.5em;
        font-weight:600;
        flex-direction:column;
        p {
            max-width: 50ch;
        }
    }
`