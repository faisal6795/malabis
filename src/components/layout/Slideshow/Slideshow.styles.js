import styled from "styled-components";
import { COLORS } from "../../../constants";

export const StyledSlideshowWrapper = styled.div`
    margin: 1rem 0;
    position: relative;

    .fav-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: #fff;
        z-index: 1;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    }

    
    @media only screen and (min-width: 1024px) {
        display: inline-block;
        margin-top: -1.75rem;
    }
`;

export const StyledImagesContainer = styled.div`
    width: 100%;
    height: 130vw;
    padding-bottom: 1.5rem;

    @media only screen and (min-width: 1024px) {
        width: 40vw;
        height: 56vw;
    }
`;

export const StyledSlideshowImage = styled.div`
    background: url(${props => props.imgSrc}) no-repeat center;
    background-size: cover;
`;

export const StyledSwiperWrapper = styled.div``;

export const StyledPagination = styled.div`
    transform: translateY(12px);

    .swiper-pagination-bullet {
        transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
        background-color: ${COLORS.primary};
        border-radius: 0.5rem;
        width: 1.25rem;
    }
`;