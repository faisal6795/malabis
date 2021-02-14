import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledInputWrapper = styled.div`
    position: relative;
`;

export const StyledInput = styled.input`
    background-color: transparent;
    padding: 1rem 1rem 0.25rem;
    outline: 0;
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid ${COLORS.grey};
    border-radius: 0.5rem;
    box-sizing: border-box;

    &:valid~label, &:focus~label {
        font-size: 0.625rem;
        top: 0.2rem;
        color: ${COLORS.primary};
    }

    &:focus {
        border-color: ${COLORS.primary};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export const StyledLabel = styled.label`
    pointer-events: none;
    position: absolute;
    font-size: 0.75rem;
    left: 1.1rem;
    top: 0.8rem;
    transition: all 0.3s ease;
`;