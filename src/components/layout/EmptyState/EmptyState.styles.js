import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledEmptyWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    text-align: center;
    padding: 5rem 1rem;

    &.hide {
        display: none;
    }

    .discover-btn {
        margin-bottom: 2rem;
    }
`;

export const StyledEmptyImage = styled.img`
    width: 75%;
    max-width: 32rem;
    margin: 2rem 0;
`;

export const StyledEmptyTitle = styled.h3`
    font-size: 1.5rem;
    color: ${COLORS.primary};
    margin: 1rem 0;
`;

export const StyledEmptyText = styled.p`
    font-size: 0.875rem;
    margin: 0;
    white-space: pre;
`;