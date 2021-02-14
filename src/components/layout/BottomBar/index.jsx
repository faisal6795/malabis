import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button';
import { StyledBottomBarItems, StyledBottomBarPrice, StyledBottomBarWrapper } from './BottomBar.styles';
import { LanguageContext } from '../../../containers/Language';

function BottomBar({ totalQuantity, totalPrice, proceedToBuy }) {

    const { dictionary } = useContext(LanguageContext);
    const itemText = dictionary.selectedItems + '(' + totalQuantity + ')';
    const priceText = dictionary.rupeesSymbol + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalPrice);

    return <StyledBottomBarWrapper>
        <StyledBottomBarItems>{itemText}</StyledBottomBarItems>
        <StyledBottomBarPrice total={dictionary.total}>{priceText}</StyledBottomBarPrice>
        <Button clickEvent={proceedToBuy} text={dictionary.proceedToBuy} customClass='btn' />
    </StyledBottomBarWrapper>;
}

BottomBar.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    proceedToBuy: PropTypes.func.isRequired,
};

export default BottomBar;