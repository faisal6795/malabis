import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledSuccessWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    margin: 6.5rem 0 5rem;
`;

export const StyledSuccessImage = styled.img`
    width: 75%;
    max-width: 32rem;
`;

export const StyledSuccessTitle = styled.h3`
    font-size: 2rem;
    margin: 1rem 0 0;
    width: 100%;
    text-align: center;
    color: ${COLORS.primary};
`;

export const StyledBottomContainer = styled.div`
    position: fixed;
    width: 100%;
    background-color: #fff;
    bottom: 0;
    padding: 1rem;
    text-align: center;
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 -0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    
    @media only screen and (min-width: 1024px) {
        border-radius: 3rem 3rem 0 0;
    }
`;

export const StyledBottomMessage = styled.p`
    margin: 0.5rem 0;
    white-space: pre;
`;

export const StyledBottomContact = styled.a`
    margin: 0;
    font-size: 1rem;    
    font-weight: bold;
    text-decoration: none;
    color: ${COLORS.primary};
`;