import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledToggleWrapper = styled.div`
    display: inline-block;
    height: 1.25rem;
    color: ${COLORS.text};
`;

export const StyledToggleText = styled.span`
    font-size: 0.75rem;
    height: 100%;
    display: inline-block;
    line-height: 1.25rem;
    vertical-align: top;
`;

export const StyledToggleInput = styled.input.attrs({
    type: "checkbox",
    title: "Toggle",
})`
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    
    &:checked~label::before {
        left: 19px;
    }
`;

export const StyledToggleLabel = styled.label`
    height: 100%;
    width: 2.25rem;
    border-radius: 1rem;
    margin: 0 0.5rem;
    position: relative;
    display: inline-block;
    background-color: ${COLORS.primary};
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 3px;
        top: 3px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        transition: left 0.3s ease;
        background-color: #fff;
    }
`;