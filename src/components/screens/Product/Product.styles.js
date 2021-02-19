import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledProductWrapper = styled.div`
    padding: 1rem;
    margin-top: 3.5rem;
    
    @media only screen and (min-width: 1024px) {
        padding: 2rem 10%;
    }
`;

export const StyledProductName = styled.h2`
    text-transform: capitalize;
    font-size: 1.5rem;
    margin: 0;

    @media only screen and (min-width: 1024px) {
        margin-left: 48vw;
        height: 6rem;
    }
`;

export const StyledProductContainer = styled.div`

    @media only screen and (min-width: 1024px) {
        display: inline-block;
        vertical-align: top;
        width: 40vw;
        margin-top: 1rem;
        padding-left: 10%;
    }
`;

export const StyledSmallWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const StyledProductPrice = styled.h3`
    display: inline-block;
    margin: 0;
    font-size: 1.5rem;
    color: ${COLORS.primary};

    &::before {
        content: '₹';
    }
`;

export const StyledOriginalPrice = styled.h4`
    display: inline-block;
    margin: 0;
    font-size: 1rem;
    color: ${COLORS.text};
    text-decoration: line-through;

    &::before {
        content: '${props => props.price}₹';
    }
`;