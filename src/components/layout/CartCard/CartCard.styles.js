import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledCartCardWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    a {
        display: inline-block;
    }
`;

export const StyledCartCardImage = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 7rem;
    height: 7rem;
    border-radius: 0.75rem;
    background: url(${props => props.image}) no-repeat center;
    background-size: cover;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.16);
`;

export const StyledCartCardRightContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding: 0 1rem;
`;

export const StyledCartCardTitle = styled.h3`
    font-size: 1.25rem;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-transform: capitalize;
    max-width: calc(100vw - 11rem);
`;

export const StyledCartCardPrice = styled.h3`
    font-size: 1.25rem;
    color: ${COLORS.primary};
    margin: 0 0 0.5rem;

    &::before{
        content: '₹';
    }
`;