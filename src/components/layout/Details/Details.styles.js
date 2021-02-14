import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledDetailsWrapper = styled.div`
    margin-top: 2rem;
    color: ${COLORS.text};
`;

export const StyledDetailsTitle = styled.h4`
    margin: 0;
    font-size: 1.25rem;
`;

export const StyledTableContainer = styled.div`
    line-height: 1.75rem;
    margin: 0.5rem 0;
`;

export const StyledLeftContainer = styled.div`
    width: 50%;
    display: inline-block;
`;

export const StyledRightContainer = styled.div`
    width: 50%;
    display: inline-block;
`;

export const StyledTableHeader = styled.span`
    text-transform: capitalize;
    display: inline-block;
    width: 100%;
`;

export const StyledTableValue = styled.h5`
    margin: 0;
    font-size: 1rem;
`;