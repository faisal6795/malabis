import styled from "styled-components";
import { COLORS } from '../../../constants';

export const StyledTextareaWrapper = styled.div`
    position: relative;
`;

export const StyledTextarea = styled.textarea`
    background-color: transparent;
    padding: 1rem 1rem 0.25rem;
    outline: 0;
    width: 100%;
    height: 5rem;
    resize: none;
    font-size: 16px;
    border: 2px solid ${COLORS.grey};
    border-radius: 0.5rem;
    box-sizing: border-box;
    overflow: hidden;

    &:valid~label, &:focus~label {
        font-size: 0.625rem;
        top: 0.3rem;
        color: ${COLORS.primary};
    }

    &:focus {
        border-color: ${COLORS.primary};
    }
`;

export const StyledLabel = styled.label`
    pointer-events: none;
    position: absolute;
    font-size: 0.75rem;
    left: 1.1rem;
    top: 0.6rem;
    transition: all 0.3s ease;
`;