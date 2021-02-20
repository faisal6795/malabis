import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/screens/Home';
import Favourites from './components/screens/Favourites';
import Cart from './components/screens/Cart';
import Product from './components/screens/Product';
import { LanguageProvider } from './containers/Language';

function App() {
	return <main>
		<LanguageProvider>
			<Navbar />
			<Switch>
				<Route path={`${process.env.PUBLIC_URL}/`} component={Home} exact />
				<Route path={`${process.env.PUBLIC_URL}/product`} component={Product} exact />
				<Route path={`${process.env.PUBLIC_URL}/favourites`} component={Favourites} exact />
				<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} exact />
			</Switch>
			<Footer />
		</LanguageProvider>
	</main>
}

export default App;
