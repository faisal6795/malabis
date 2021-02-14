import styled from "styled-components";
import bannerImage from '../../../assets/images/banner.svg';
import { COLORS } from "../../../constants";

export const StyledBannerWrapper = styled.div`
    max-width: 32rem;
    margin: auto;
`;

export const StyledHeading = styled.h1`
    margin: 1.5rem 0 1rem;
    text-align: center;
    color: ${COLORS.text};
`;

export const StyledBannerImage = styled.img.attrs({
    src: bannerImage,
})`
    width: 100%;
    padding: 0.5rem;
    background: ${COLORS.accent};
    border-radius: 1rem;
`;