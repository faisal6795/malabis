import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Counter from '../../shared/Counter';
import { StyledCartCardImage, StyledCartCardPrice, StyledCartCardRightContainer, StyledCartCardTitle, StyledCartCardWrapper } from './CartCard.styles';
import { ACTION } from '../../../constants';

function CartCard({ id, name, price, images, quantity }) {

    const dispatch = useDispatch();

    function updateQuantity(quantity) {
        !quantity && dispatch({
            type: ACTION.ADD_TO_CART,
            value: { id, isCart: false }
        });
        dispatch({
            type: ACTION.CHANGE_QUANTITY,
            value: { id, quantity: quantity || 100 }
        });
    }

    function setCurrentProduct() {
        dispatch({
            type: ACTION.SET_CURRENT,
            value: id
        });
    }

    return <StyledCartCardWrapper>
        <Link to='/product' title='product'>
            <StyledCartCardImage image={images[0]} onClick={setCurrentProduct} />
        </Link>
        <StyledCartCardRightContainer>
            <StyledCartCardTitle>{name}</StyledCartCardTitle>
            <StyledCartCardPrice>{price}</StyledCartCardPrice>
            <Counter changeEvent={updateQuantity} isRetail={quantity % 100 ? true : false} presetValue={quantity} />
        </StyledCartCardRightContainer>
    </StyledCartCardWrapper>;
}

CartCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired,
}

export default CartCard;