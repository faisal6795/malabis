import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LanguageContext } from '../../../containers/Language';
import { StyledFooterContainer, StyledFooterDesc, StyledFooterLogo, StyledFooterPhone, StyledFooterTitle, StyledFooterWhatsapp, StyledLeftContainer, StyledRightContainer, StyledWrapper } from './Footer.styles';

function Footer() {

    const { dictionary } = useContext(LanguageContext);
    const history = useHistory();
    const [footerClass, setFooterClass] = useState(history.location.pathname.toLowerCase().includes('cart') ? 'hide' : '');

    useEffect(() => {
        return history.listen((location) => {
            setFooterClass(location.pathname.toLowerCase().includes('cart') ? 'hide' : '');
        });
    }, [history]);

    return <StyledWrapper className={footerClass} >
        <Link to="/">
            <StyledFooterLogo />
        </Link>
        <StyledFooterContainer>
            <StyledLeftContainer>
                <StyledFooterTitle>{dictionary.title}</StyledFooterTitle>
                <StyledFooterDesc>{dictionary.address}</StyledFooterDesc>
            </StyledLeftContainer>
            <StyledRightContainer>
                <StyledFooterPhone />
                <StyledFooterWhatsapp />
            </StyledRightContainer>
        </StyledFooterContainer>
    </StyledWrapper>;
}

export default Footer;