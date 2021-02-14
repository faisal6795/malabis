import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const StyledButton = styled.button`
    cursor: pointer;
    font-size: 1rem;
    height: 3em;
    border: 0;
    outline: 0;
    padding: 0 1em;
    border-radius: 0.75em;

    &:disabled{
        opacity: 0.4;
        pointer-events: none;
    }

    &.btn {
        width: 100%;
        max-width: 32rem;
        color: #fff;
        display: block;
        margin: 2rem auto 0;
        font-weight: bold;
        box-shadow: 0 4px 8px ${COLORS.primary}33;
        background: linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
    }
`;

export const StyledText = styled.span`
    display: inline-block;
    vertical-align: middle;
`;

export const StyledSideIcon = styled.span`
    display: inline-block;
    vertical-align: middle;
    width: 3rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: 50%;
`;