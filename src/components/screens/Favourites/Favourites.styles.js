import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledFavouritesWrapper = styled.div`
    padding: 1rem;
    margin-top: 3.5rem;
    color: ${COLORS.text};
    
    @media only screen and (min-width: 1024px) {
        padding: 2rem 10%;
    }
`;

export const StyledFavouritesName = styled.h2`
    margin: 0;
    font-size: 1.5rem;
`;

export const StyledFavouritesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9.75rem, 1fr));
    grid-gap: 1rem;
    margin: 1rem 0 2rem;

    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
        grid-gap: 2rem;
    }
`;