import React from 'react';
import bannerImage from '../../../assets/images/banner.jpg';
import logoImg from '../../../assets/images/logo.svg';
import { DATA } from '../../../constants';
import { StyledBannerImage, StyledBannerLogo, StyledBannerLogoContainer, StyledBannerLogoSubtitle, StyledBannerLogoTitle, StyledBannerWrapper } from './Banner.styles';

function Banner() {
    const title = DATA.brandName.split(' ')[0],
        subtitle = DATA.brandName.split(' ')[1],
        bannerAltText = 'Banner image';

    return <StyledBannerWrapper>
        <StyledBannerImage src={bannerImage} alt={bannerAltText} />
        <StyledBannerLogoContainer>
            <StyledBannerLogo src={logoImg} alt={title} />
            <StyledBannerLogoTitle>{title}</StyledBannerLogoTitle>
            <StyledBannerLogoSubtitle>{subtitle}</StyledBannerLogoSubtitle>
        </StyledBannerLogoContainer>
    </StyledBannerWrapper>
}

export default Banner;