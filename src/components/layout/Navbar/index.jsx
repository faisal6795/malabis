import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DATA } from '../../../constants';
import { StyledCart, StyledCartCounter, StyledFavourite, StyledLanguage, StyledLogo, StyledNavbarWrapper, StyledRightContainer } from './Navbar.styles';
import { LanguageContext } from '../../../containers/Language';

function Navbar() {

    const count = useSelector(state => state.products.filter(item => item.isCart).length);
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
    const [isEnglish, setEnglish] = useState(userLanguage === 'en');
    const brandName = DATA.brandName.split(' ')[0];

    function switchLanguage() {
        setEnglish(!isEnglish);
        userLanguageChange(!isEnglish ? 'en' : 'hi');
    }

    return <StyledNavbarWrapper >
        <Link to="/">
            <StyledLogo>{brandName}</StyledLogo>
        </Link>
        <StyledRightContainer>
            <StyledLanguage onClick={switchLanguage} className={isEnglish ? 'english' : ''}>A</StyledLanguage>
            <Link to="/favourites">
                <StyledFavourite />
            </Link>
            <Link to="/cart">
                <StyledCart>{count > 0 && <StyledCartCounter>{count}</StyledCartCounter>}</StyledCart>
            </Link>
        </StyledRightContainer>
    </StyledNavbarWrapper>
}

export default Navbar;