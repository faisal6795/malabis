import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';
import ImgBtn from '../../shared/ImgBtn';
import { StyledHeart, StyledLabel, StyledProductContainer, StyledProductImage, StyledProductName, StyledProductOriginal, StyledProductPrice } from './ProductCard.styles';
import crossIcon from '../../../assets/images/cross.svg';
import { LanguageContext } from '../../../containers/Language';

function ProductCard({ data, setCurrentProduct, setFav, addToCart, isInFavPage, removeProduct }) {

    const { dictionary } = useContext(LanguageContext);
    const productId = 'fav-' + +new Date();
    const { id, images, name, price, original, isFav, isCart } = data;
    const [isFavourite, setFavourite] = useState(isFav);

    function changeEvent(event) {
        setFav(id, event.target.checked);
        setFavourite(event.target.checked);
    }

    return <StyledProductContainer>
        {isInFavPage ?
            <ImgBtn clickEvent={() => { removeProduct(id) }} imgUrl={crossIcon} title='Remove' customClass='remove-icon' /> :
            <>
                <StyledHeart id={productId} onChange={changeEvent} checked={isFavourite} />
                <StyledLabel htmlFor={productId} title='Add to favourites' />
            </>}
        <Link to={`${process.env.PUBLIC_URL}/product`} title='product' onClick={() => { setCurrentProduct(id) }}>
            <StyledProductImage image={images[0]}></StyledProductImage>
        </Link>
        <StyledProductName>{name}</StyledProductName>
        <StyledProductPrice>{price}</StyledProductPrice>
        <StyledProductOriginal>{original}</StyledProductOriginal>
        {isInFavPage &&
            <Button text={isCart ? dictionary.addedToCart : dictionary.addToCart}
                clickEvent={() => { addToCart(id) }}
                isDisable={isCart}
                customClass='add-btn btn'
            />
        }
    </StyledProductContainer>
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    setCurrentProduct: PropTypes.func.isRequired,
    setFav: PropTypes.func,
    addToCart: PropTypes.func,
    isInFavPage: PropTypes.bool,
    removeProduct: PropTypes.func,
};

export default ProductCard;