import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledBottomBarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 1rem;
    background-color: #fff;
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 -0.25rem 0.5rem rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: 1024px) {
        padding: 2rem calc(50% - 16rem);
        border-radius: 3rem 3rem 0 0;
    }
`;

export const StyledBottomBarItems = styled.span`
    font-size: 1rem;
    display: inline-block;
`;

export const StyledBottomBarPrice = styled.span`
    font-size: 1rem;
    float: right;
    font-weight: bold;
    color: ${COLORS.primary};

    &::before {
        content: '${props => props.total}';
        color: ${COLORS.text};
        font-weight: normal;
    }
`;