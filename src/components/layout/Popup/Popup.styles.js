import styled from "styled-components";
import { COLORS } from "../../../constants";
import closeIcon from '../../../assets/images/cross.svg';

export const StyledPopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    background-color: rgb(0 0 0 / 60%);

    .input-box {
        margin-bottom: 1rem;

        &.input-name {
            width: calc(50% - 0.5rem);
            display: inline-block;
            
            & + .input-name {
                margin-left: 1rem;
            }
        }
    }

    .btn {
        max-width: 32rem;
    }
`;

export const StyledPopupWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 32rem;
    padding: 1.5rem 1rem;
    border-radius: 1.25rem;
    color: ${COLORS.text};
    background-color: #fff;
`;

export const StyledPopupTitle = styled.h4`
    font-size: 1.25rem;
    margin: 0 0 2rem;
    display: inline-block;
`;

export const StyledPopupClose = styled.button`
    float: right;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: url(${closeIcon}) no-repeat center;
    background-size: contain;
`;

export const StyledPopupInputContainer = styled.div``;