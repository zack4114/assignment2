import React, {useMemo} from 'react'
import { ContactDetailWrapper, SeperatorBar } from './styled-component'
import Button from './button';
import MailIcon from '../assets/images/envelope';
import TelephoneIcon from '../assets/images/telephone';

function ContactDetails({data}) {
    const {heading, description, contactEmail, contactNo} = data

    const emailButtonData = useMemo(() => ({
        type:'OUTLINE_BUTTON',
        label:'Email Us',
        label2: contactEmail,
        icon: <MailIcon/>,
        onClick: () =>{}
    }),[contactEmail])

    const callButtonData = useMemo(() => ({
        type:'OUTLINE_BUTTON',
        label:'Call Us',
        label2: contactNo,
        icon: <TelephoneIcon/>,
        onClick: () =>{}
    }),[contactNo])

    return (
        <ContactDetailWrapper>
            <h3>{heading}</h3>
            <SeperatorBar/>
            <div className="description-container">
                <p>{description}</p>
                <div className="button-container">
                <Button data={emailButtonData}/>
                 <Button data={callButtonData}/></div>
            </div>
        </ContactDetailWrapper>
    )
}

export default ContactDetails
