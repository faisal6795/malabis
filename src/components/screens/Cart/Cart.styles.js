import styled from "styled-components"
import { COLORS } from "../../../constants";

export const StyledCartWrapper = styled.div`
    margin-top: 3.5rem;
    padding: 1rem;
    color: ${COLORS.text};

    @media only screen and (min-width: 1024px) {
        padding: 2rem 10%;
    }
`;

export const StyledCartTitle = styled.h2`
    margin: 0;
    font-size: 1.5rem;
`;

export const StyledCartCardsContainer = styled.div`
    margin-top: 1rem;

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
        grid-gap: 2rem;
    }
`;