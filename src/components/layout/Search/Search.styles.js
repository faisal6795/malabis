import styled from "styled-components";
import searchIcon from '../../../assets/images/search.svg';
import crossIcon from '../../../assets/images/cross.svg';
import { COLORS } from "../../../constants";

export const StyledWrapper = styled.div`
    height: 3rem;
    background: ${COLORS.accent};
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
`;

export const StyledSearchInput = styled.input`
    margin-left: 0.5rem;
    border: 0;
    padding: 0;
    outline: 0;
    height: 100%;
    flex: 1 auto;
    font-size: 14px;
    background: transparent;
    color: ${COLORS.text};
`;

export const StyledSearchIcon = styled.span`
    height: 1.25rem;
    width: 1.25rem;
    opacity: 0.5;
    background: url(${searchIcon}) no-repeat center;
    background-size: contain;
`;

export const StyledClearIcon = styled.button`
    background: url(${crossIcon}) no-repeat center;
    background-size: 60%;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    opacity: 0.5;
`;