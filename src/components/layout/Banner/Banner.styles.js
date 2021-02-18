import styled from "styled-components";

export const StyledBannerWrapper = styled.div`
    margin-top: 2rem;
    position: relative;
    text-align: center;
    border-radius: 1rem;
    display: grid;
    place-items: center;
`;

export const StyledBannerLogo = styled.img`
    height: 7rem;
    width: auto;
`;

export const StyledBannerLogoContainer = styled.div`
    position: absolute;
    text-transform: uppercase;
    color: #fff;
`;

export const StyledBannerLogoTitle = styled.span`
    display: block;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.875rem;
`;

export const StyledBannerLogoSubtitle = styled.span`
    letter-spacing: 5px;
    margin-top: -0.125rem;
`;

export const StyledBannerImage = styled.img`
    width: 100%;
    border-radius: 1rem;
    filter: brightness(0.8);

    @media only screen and (min-width: 1024px) {
        height: 24rem;
    }
`;