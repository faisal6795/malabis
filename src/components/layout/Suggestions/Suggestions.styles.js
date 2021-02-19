import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledSuggestionsWrapper = styled.div`
    position: relative;
    margin-top: 1.5rem;

    > a {
        float: right;
    }
`;

export const StyledSuggestionsHeading = styled.h4`
    margin: 0;
    display: inline-block;
    font-size: 18px;
    color: ${COLORS.text};
`;

export const StyledViewAll = styled.span`
    font-size: 0.875rem;
    color: ${COLORS.text};
    text-decoration: none;
    font-weight: bold;
`;

export const StyledSuggestionsContainer = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    padding: 1rem;
    margin: 0 -1rem;

    @media only screen and (min-width: 1024px) {
        margin: 0 -10vw;
        padding: 2rem 10vw;
    }
`;