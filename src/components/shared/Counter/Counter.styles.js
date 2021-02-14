import styled from "styled-components";
import decrementIcon from '../../../assets/images/minus.svg';
import incrementIcon from '../../../assets/images/plus.svg';
import { COLORS } from "../../../constants";

export const StyledCounterWrapper = styled.div`
    display: inline-block;
    white-space: nowrap;
    height: 2rem;
    color: ${COLORS.text};
`;

export const StyledCounterLabel = styled.span`
    height: 100%;
    display: inline-block;
    line-height: 2rem;
    margin-right: 1rem;
    vertical-align: top;
    font-size: 14px;
`;

const StyledButton = styled.button`
    margin: 0;
    padding: 0;
    width: 2rem;
    height: 2rem;
    border: 0;
    outline: 0;
    cursor: pointer;
    display: inline-block;
    border-radius: 0.5rem;
    background-size: 40%;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
`;

export const StyledDecrementBtn = styled(StyledButton)`
    background-image: url(${decrementIcon});
`;

export const StyledIncrementBtn = styled(StyledButton)`
    background-image: url(${incrementIcon});
`;

export const StyledCounterValue = styled.span`
    display: inline-block;
    width: 3rem;
    font-size: 0.875rem;
    height: 100%;
    vertical-align: top;
    line-height: 2rem;
    text-align: center;
`;