import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../layout/ProductCard';
import Suggestions from '../../layout/Suggestions';
import EmptyState from '../../layout/EmptyState';
import { StyledFavouritesCardContainer, StyledFavouritesName, StyledFavouritesWrapper } from './Favourites.styles';
import emptyImage from '../../../assets/images/empty_fav.svg';
import { ACTION } from '../../../constants';
import { LanguageContext } from '../../../containers/Language';

function Favourites() {

    const { dictionary } = useContext(LanguageContext);
    const productData = useSelector(state => state.products).filter(item => item.isFav);
    const dispatch = useDispatch();

    function deleteFromFavourites(id) {
        dispatch({
            type: ACTION.SET_FAVOURITE,
            value: { id, isFav: false }
        });
    }

    function addToCart(id) {
        dispatch({
            type: ACTION.ADD_TO_CART,
            value: { id, isCart: true }
        });
    }

    function setCurrentProduct(id) {
        dispatch({
            type: ACTION.SET_CURRENT,
            value: id
        });
    }

    function getFavouritesList() {
        return productData.map(product => <ProductCard key={product.id}
            data={product}
            isInFavPage={true}
            removeProduct={deleteFromFavourites}
            addToCart={addToCart}
            setCurrentProduct={setCurrentProduct}
        />);
    }

    return <StyledFavouritesWrapper>
        <StyledFavouritesName>{dictionary.favouritesTitle}</StyledFavouritesName>
        <StyledFavouritesCardContainer>{getFavouritesList()}</StyledFavouritesCardContainer>
        <EmptyState image={emptyImage} title={dictionary.emptyFavouritesTitle} text={dictionary.emptyFavouritesText} customClass={productData.length ? 'hide' : ''} />
        <Suggestions title={dictionary.suggestionsTitle} />
    </StyledFavouritesWrapper>
}

export default Favourites;