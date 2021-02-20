import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../../../constants';
import Button from '../../shared/Button';
import { StyledBottomContact, StyledBottomContainer, StyledBottomMessage, StyledSuccessImage, StyledSuccessTitle, StyledSuccessWrapper } from './Success.styles';
import successImg from '../../../assets/images/success.svg';
import { LanguageContext } from '../../../containers/Language';

const contact = DATA.name + ' - ' + DATA.phone;

function Success() {
    const { dictionary } = useContext(LanguageContext);

    return <>
        <StyledSuccessWrapper>
            <StyledSuccessImage src={successImg} alt={dictionary.orderSuccessful} />
            <StyledSuccessTitle>{dictionary.orderSuccessful}</StyledSuccessTitle>
        </StyledSuccessWrapper>
        <StyledBottomContainer>
            <StyledBottomMessage>{dictionary.orderMessage}</StyledBottomMessage>
            <StyledBottomContact href={'tel:+91' + DATA.phone}>{contact}</StyledBottomContact>
            <Link to={`${process.env.PUBLIC_URL}/`}>
                <Button text={dictionary.continueShopping} clickEvent={() => { }} customClass='btn' />
            </Link>
        </StyledBottomContainer>
    </>
}

export default Success;