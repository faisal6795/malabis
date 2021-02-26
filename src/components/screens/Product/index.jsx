import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleBtn from '../../shared/ToggleBtn';
import Counter from '../../shared/Counter';
import Button from '../../shared/Button';
import Slideshow from '../../layout/Slideshow';
import { StyledOriginalPrice, StyledSmallWrapper, StyledProductName, StyledProductPrice, StyledProductWrapper, StyledProductContainer } from './Product.styles';
import { ACTION } from '../../../constants';
import { LanguageContext } from '../../../containers/Language';

function Product() {

    const { dictionary } = useContext(LanguageContext);
    const currentProductId = useSelector(state => state.currentProduct);
    const { id, name, price, original, images, quantity, isFav, isCart } =
        useSelector(state => state.products).filter(item => item.id === currentProductId)[0];
    const dispatch = useDispatch();
    const [isRetail, setRetail] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentProductId]);

    function changeToggleBtn(event) {
        setRetail(event.target.checked);
        onCounterChange(event.target.checked ? 1 : 100);
    }

    function onCounterChange(quantity) {
        dispatch({
            type: ACTION.CHANGE_QUANTITY,
            value: { id, quantity }
        });
        quantity === 0 && dispatch({
            type: ACTION.ADD_TO_CART,
            value: { id, isCart: false }
        });
    }

    function addToCart() {
        dispatch({
            type: ACTION.ADD_TO_CART,
            value: { id, isCart: true }
        });
        quantity === 0 && dispatch({
            type: ACTION.CHANGE_QUANTITY,
            value: { id, quantity: isRetail ? 1 : 100 }
        });
    }

    return <StyledProductWrapper>
        <StyledProductName>{name}</StyledProductName>
        <Slideshow id={id} imageList={images} isFav={isFav} />
        <StyledProductContainer>
            <StyledSmallWrapper>
                <StyledProductPrice>{new Intl.NumberFormat('en-IN').format(price)}</StyledProductPrice>
                <ToggleBtn isChecked={isRetail}
                    changeEvent={changeToggleBtn}
                    leftText={dictionary.wholesale}
                    rightText={dictionary.retail}
                />
            </StyledSmallWrapper>
            <StyledSmallWrapper>
                <StyledOriginalPrice price={dictionary.priceWithSymbol}>{new Intl.NumberFormat('en-IN').format(original)}</StyledOriginalPrice>
                <Counter label={dictionary.quantity}
                    changeEvent={onCounterChange}
                    isRetail={isRetail}
                    presetValue={quantity}
                />
            </StyledSmallWrapper>
            <Button clickEvent={addToCart}
                text={isCart ? dictionary.addedToCart : dictionary.addToCart}
                isDisable={isCart}
                customClass='btn'
            />
        </StyledProductContainer>
    </StyledProductWrapper>
}

export default Product;