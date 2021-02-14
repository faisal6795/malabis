import styled from "styled-components";
import heartIcon from '../../../assets/images/heart.svg';
import cartIcon from '../../../assets/images/cart.svg';
import hindiIcon from '../../../assets/images/hindi.svg';
import { COLORS } from "../../../constants.js";

export const StyledNavbarWrapper = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 3.5rem;
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0.25rem 0.5rem ${COLORS.primary}33;
    background-color: ${COLORS.primary};

    @media only screen and (min-width: 1024px) {
        padding: 0 10%;
    }
`;

export const StyledLogo = styled.button`
    background-color: ${COLORS.grey};
    cursor: pointer;
    height: 2rem;
    width: 4rem;
    border: 0;
    padding: 0;
    outline: 0;
`;

export const StyledRightContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledIcon = styled.button`
    border: 0;
    padding: 0;
    outline: 0;
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    cursor: pointer;
`;

export const StyledLanguage = styled(StyledIcon)`
    color: #fff;
    font-size: 1.6rem;
    background-position-y: calc(50% + 1px);
    
    &.english {
        background-image: url(${hindiIcon});
        font-size: 0;
    }
`;

export const StyledFavourite = styled(StyledIcon)`
    background-image: url(${heartIcon});
    filter: brightness(0) invert(1);
`;

export const StyledCart = styled(StyledIcon)`
    position: relative;
    background-image: url(${cartIcon});
`;

export const StyledCartCounter = styled.span`
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    font-size: 0.625rem;
    color: ${COLORS.primary};
    background-color: #fff;
    border: 2px solid ${COLORS.primary};
    line-height: 1rem;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    right: 0.4rem;
`;