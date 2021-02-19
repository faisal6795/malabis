import styled from "styled-components";
import heartIcon from '../../../assets/images/heart.svg';
import heartFillIcon from '../../../assets/images/heart_fill.svg';
import { COLORS } from "../../../constants";

export const StyledProductContainer = styled.div`
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.12);
    padding: 0.5rem 0.5rem 1rem;
    position: relative;
    color: ${COLORS.text};

    a {
        text-decoration: none;
        display: block;
    }

    .add-btn {        
        padding: 0;
        font-size: 0.75rem;
        margin-top: 0.5rem;
        height: 2rem;
    }

    .remove-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2.25rem;
        height: 2.25rem;
        z-index: 1;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledHeart = styled.input.attrs({
    type: 'checkbox'
})`
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    position: absolute;

    &:checked ~ label {
        background-image: url(${heartFillIcon});
    }
`;

export const StyledLabel = styled.label`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background: #fff url(${heartIcon}) no-repeat 50% 55%;
    background-size: 50%;
    cursor: pointer;
    z-index: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledProductImage = styled.div`
    border: 1px solid ${COLORS.grey};
    width: 100%;
    height: 12rem;
    position: relative;
    margin: 0 auto;
    border-radius: 0.75rem;
    background: #fff url(${props => props.image}) no-repeat center;
    background-size: cover;
    
    @media only screen and (min-width: 1024px) {
        height: 14rem;
    }
`;

export const StyledProductName = styled.h3`
    margin: 0.5rem 0 0.25rem;
    font-size: 1rem;
    height: 2.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-transform: capitalize;
`;

export const StyledProductPrice = styled.h4`
    margin: 0;
    display: inline-block;
    font-size: 1rem;
    color: ${COLORS.primary};

    &:before {
        content: '₹';
    }
`;

export const StyledProductOriginal = styled.p`
    display: inline-block;
    margin: 0 0 0 0.5rem;
    font-size: 11px;
    text-decoration: line-through;

    &:before {
        content: '₹';
    }
`;