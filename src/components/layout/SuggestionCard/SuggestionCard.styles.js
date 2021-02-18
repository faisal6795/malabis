import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledSuggestionCardWrapper = styled.div`
    display: inline-block;
    color: ${COLORS.text};
    width: auto;
    border-radius: 1rem;
    border: 1px solid #ddd;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    > a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
`;

export const StyledSuggestionImage = styled.div`
    display: inline-block;
    width: 5.5rem;
    height: 5.5rem;
    margin: 0.25rem;
    vertical-align: middle;
    border-radius: 0.75rem;
    background: url(${props => props.image}) no-repeat center;
    background-size: cover;
`;

export const StyledSuggestionContainer = styled.div`
    display: inline-flex;
    padding: 0 0.5rem;
    vertical-align: middle;
    flex-flow: column wrap;
`;

export const StyledSuggestionTitle = styled.h6`
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0 0 0.25rem;
    white-space: normal;
    max-width: 10rem;
`;

export const StyledSuggestionPrice = styled.span`
    font-size: 0.75rem;

    &:before {
        content: '₹';
    }
`;