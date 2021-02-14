import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../../layout/CartCard';
import BottomBar from '../../layout/BottomBar';
import Popup from '../../layout/Popup';
import Success from '../../layout/Success';
import EmptyState from '../../layout/EmptyState';
import { StyledCartCardsContainer, StyledCartTitle, StyledCartWrapper } from './Cart.styles';
import emptyImage from '../../../assets/images/empty_cart.svg';
import { ACTION } from '../../../constants';
import { LanguageContext } from '../../../containers/Language';

function Cart() {

    const { dictionary } = useContext(LanguageContext);
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const cartData = useSelector(state => state.products).filter(item => item.isCart && item.quantity > 0);
    const { firstName, lastName, phone, address } = useSelector(state => state.userData);
    const dispatch = useDispatch();

    function getCartProducts() {
        return cartData.map(product => <CartCard key={product.id} {...product} />);
    }

    function proceedToBuy() {
        setShowPopup(true);
    }

    function confirmOrder() {
        sendSMS();
        closePopup();
        setShowSuccess(true);
        cartData.forEach(item => {
            dispatch({
                type: ACTION.ADD_TO_CART,
                value: { id: item.id, isCart: false }
            });
            dispatch({
                type: ACTION.CHANGE_QUANTITY,
                value: { id: item.id, quantity: 100 }
            });
        });
    }

    function sendSMS() {
        let body = 'Name: ' + firstName + ' ' + lastName + '\nPhone: ' + phone + '\nAddress: ' + address + '\n\nOrder:\n',
            total = 0;
        const addCommaToDigits = (value) =>
            dictionary.rupeesSymbol + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value);

        cartData.forEach(item => {
            body += item.name + ' (' + item.quantity + ' x ' + dictionary.rupeesSymbol + item.price + ')\n';
            total += item.quantity * item.price;
        });

        body += '\nTotal: ' + addCommaToDigits(total);
        console.log(body);
    }

    function closePopup() {
        setShowPopup(false);
    }

    function getTotalPrice() {
        return cartData.reduce((a, b) => a + b.quantity * b.price, 0);
    }

    return !showSuccess ?
        <StyledCartWrapper>
            <StyledCartTitle>{dictionary.cartTitle}</StyledCartTitle>
            <StyledCartCardsContainer>{getCartProducts()}</StyledCartCardsContainer>
            <BottomBar totalQuantity={cartData.length} totalPrice={getTotalPrice()} proceedToBuy={proceedToBuy} />
            {showPopup && <Popup closePopup={closePopup} confirmOrder={confirmOrder} />}
            <EmptyState image={emptyImage} title={dictionary.emptyCartTitle} text={dictionary.emptyCartText} customClass={cartData.length ? 'hide' : ''} />
        </StyledCartWrapper> :
        <Success />;
}

export default Cart;