import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button';
import Banner from '../../layout/Banner';
import Search from '../../layout/Search';
import ProductCard from '../../layout/ProductCard';
import EmptyState from '../../layout/EmptyState';
import { HomeWrapper, ProductWrapper } from './Home.styles';
import { ACTION } from '../../../constants';
import noResults from '../../../assets/images/no_results.svg';
import { LanguageContext } from '../../../containers/Language';

function Home() {

    const count = 8;
    const { dictionary } = useContext(LanguageContext);
    const productsData = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [productsToShow, setProductsToShow] = useState(productsData);
    const [productCount, setProductCount] = useState(count);
    const [searchText, setSearchText] = useState('');

    function addToFavourites(id, checked) {
        dispatch({
            type: ACTION.SET_FAVOURITE,
            value: { id, isFav: checked }
        });
    }

    function searchValue(value) {
        const products = productsData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        setSearchText(value);
        setProductsToShow(products);
    }

    function setCurrentProduct(id) {
        dispatch({
            type: ACTION.SET_CURRENT,
            value: id
        });
    }

    function getProductList() {
        return productsToShow.slice(0, productCount).map(product =>
            <ProductCard key={product.id} data={product} setFav={addToFavourites} setCurrentProduct={setCurrentProduct} />);
    }

    function loadMore() {
        setProductCount(productCount + count);
    }

    return <HomeWrapper>
        <Search searchValue={searchValue} />
        {!searchText && <Banner />}
        {productsToShow.length ?
            <>
                <ProductWrapper>{getProductList()}</ProductWrapper>
                {productCount < productsToShow.length && <Button clickEvent={loadMore} customClass='btn' text={dictionary.loadMore} />}
            </> :
            <EmptyState image={noResults} title={dictionary.noResults} text={dictionary.noResultsDesc} customClass='no-results' />
        }
    </HomeWrapper>
}

export default Home;