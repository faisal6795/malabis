import React, { useContext } from 'react';
import { LanguageContext } from '../../../containers/Language';
import { StyledBannerImage, StyledBannerWrapper, StyledHeading } from './Banner.styles';

function Banner() {
    const { dictionary } = useContext(LanguageContext);

    return <StyledBannerWrapper>
        <StyledHeading>{dictionary.title}</StyledHeading>
        <StyledBannerImage alt={dictionary.bannerAltText} />
    </StyledBannerWrapper>
}

export default Banner;