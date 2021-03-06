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

export const StyledBannerLogoTitle = styled.h2`
    margin: 0;
    font-weight: bold;
    letter-spacing: 6px;
    font-size: 1.875rem;
`;

export const StyledBannerLogoSubtitle = styled.span`
    letter-spacing: 8px;
    margin-top: -0.125rem;
`;

export const StyledBannerImage = styled.div`
    width: 100%;
    height: 16rem;
    border-radius: 1rem;
    background: url(${props => props.bg}) no-repeat center;
    background-size: cover;
    filter: brightness(0.8);

    @media only screen and (min-width: 1024px) {
        height: 24rem;
    }
`;