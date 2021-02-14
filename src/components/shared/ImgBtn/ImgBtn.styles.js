import styled from "styled-components";

export const StyledWrapper = styled.button`
    border: 0;
    outline: 0;
    padding: 0;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;

    &:disabled {
        opacity: 0.4;
        pointer-events: none;
        cursor: default;
    }
`;

export const StyledIcon = styled.span`
    display: block;
    width: 100%;
    height: 100%;
    background: url(${props => props.imgUrl}) 50% 55% no-repeat;
`;