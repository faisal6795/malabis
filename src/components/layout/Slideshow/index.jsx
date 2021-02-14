import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import ImgBtn from '../../shared/ImgBtn';
import heartIcon from '../../../assets/images/heart.svg';
import heartFillIcon from '../../../assets/images/heart_fill.svg';
import { StyledImagesContainer, StyledPagination, StyledSlideshowImage, StyledSlideshowWrapper, StyledSwiperWrapper } from './Slideshow.styles';
import { ACTION } from '../../../constants';

function Slideshow({ id, imageList, isFav }) {

    useEffect(() => {
        Swiper.use([Pagination]);
        new Swiper('.swiper-container', { loop: true, pagination: { el: '.swiper-pagination' } });
    }, []);

    const dispatch = useDispatch();

    function getImages() {
        return imageList.map((image, index) => <StyledSlideshowImage key={index} imgSrc={image} className='swiper-slide' />);
    }

    function favouriteClicked() {
        dispatch({
            type: ACTION.SET_FAVOURITE,
            value: { id, isFav: !isFav }
        });
    }

    return <StyledSlideshowWrapper>
        <StyledImagesContainer className='swiper-container'>
            <StyledSwiperWrapper className='swiper-wrapper'>{getImages()}</StyledSwiperWrapper>
            <StyledPagination className='swiper-pagination' />
        </StyledImagesContainer>
        <ImgBtn clickEvent={favouriteClicked} imgUrl={isFav ? heartFillIcon : heartIcon} customClass='fav-btn' />
    </StyledSlideshowWrapper>
}

Slideshow.propTypes = {
    id: PropTypes.string.isRequired,
    imageList: PropTypes.array.isRequired,
    isFav: PropTypes.bool.isRequired,
};

export default Slideshow;