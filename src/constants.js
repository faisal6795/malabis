import saree1 from './assets/images/saree1.jpg';
import saree2 from './assets/images/saree2.webp';
import saree3 from './assets/images/saree3.webp';
import saree4 from './assets/images/saree4.webp';
import saree5 from './assets/images/saree5.webp';

export const COLORS = {
    text: "#222222",
    grey: "#DDDDDD",
    primary: "#6C63FF",
    secondary: "#574fcb",
    like: "#FF3366",
    accent: '#EDEDF4',
}

export const DATA = {
    name: 'Mr. Abu Nasir Ansari',
    phone: "8976513089",
    whatsappLink: 'https://wa.me/91',
}

export const ACTION = {
    'SET_FAVOURITE': 1,
    'SET_CURRENT': 2,
    'CHANGE_QUANTITY': 3,
    'ADD_TO_CART': 4,
    'SAVE_FIRST_NAME': 5,
    'SAVE_LAST_NAME': 6,
    'SAVE_PHONE': 7,
    'SAVE_ADDRESS': 8,
}

export const ENGLISH = {
    title: 'Malabis Collection',
    bannerAltText: 'Banner image',
    search: 'Search',
    noResults: 'No results found',
    noResultsDesc: 'Try searching for something else',
    selectedItems: 'Selected Items ',
    proceedToBuy: 'Proceed to buy',
    rupeesSymbol: '₹',
    priceWithSymbol: 'Price: ',
    discoverProducts: 'Discover products',
    details: 'Product Details',
    address: 'Muhammadabad Gohna, Mau, \nUttar Pradesh',
    inputTitle: 'User details',
    inputFirstname: 'First name',
    inputLastname: 'Last name',
    inputPhone: 'Phone',
    inputAddress: 'Address',
    confirmOrder: 'Confirm order',
    addToCart: 'Add to cart',
    addedToCart: 'Added to cart',
    orderSuccessful: 'Order successful!',
    orderMessage: 'The dealer will contact you shortly. \nIf you have any queries, please call',
    continueShopping: 'Continue shopping',
    viewAll: 'View all',
    cartTitle: 'Cart',
    emptyCartTitle: 'Whoops!',
    emptyCartText: 'Your cart is empty',
    favouritesTitle: 'Favourites',
    suggestionsTitle: 'Inspired by your favourites',
    emptyFavouritesTitle: 'No Favourites Yet',
    emptyFavouritesText: 'Looks like you haven\'t added any \nproduct to your favourites yet.',
    wholesale: 'Wholesale',
    retail: 'Retail',
    quantity: 'Quantity:',
    total: 'Total: ',
}

export const HINDI = {
    title: 'मलाबिस कलेक्शन',
    bannerAltText: 'बैनर की तस्वीर',
    search: 'खोज करें',
    noResults: 'कोई परिणाम नहीं मिला',
    noResultsDesc: 'कुछ और खोजने की कोशिश करिये',
    selectedItems: 'चयनित उत्पाद ',
    proceedToBuy: 'खरीदने के लिए आगे बढ़ें',
    rupeesSymbol: '₹',
    priceWithSymbol: 'कीमत: ',
    discoverProducts: 'उत्पादों की खोज करें',
    details: 'उत्पाद विवरण',
    address: 'मुहम्मदाबाद गोहना, मऊ, \nउत्तर प्रदेश',
    inputTitle: 'उपयोगकर्ता की जानकारी',
    inputFirstname: 'पहला नाम',
    inputLastname: 'उपनाम',
    inputPhone: 'मोबाइल नंबर',
    inputAddress: 'पता',
    confirmOrder: 'ओर्डर की पुष्टि',
    addToCart: 'कार्ट में डालें',
    addedToCart: 'कार्ट में मौजूद',
    orderSuccessful: 'ओर्डर सफल!',
    orderMessage: 'डीलर जल्द ही आपसे संपर्क करेंगे \nयदि आपके कोई प्रश्न हैं, तो कृपया कॉल करें',
    continueShopping: 'खरीदारी जारी रखें',
    viewAll: 'सभी देखें',
    cartTitle: 'कार्ट',
    emptyCartTitle: 'अरेरे!',
    emptyCartText: 'आपका कर्ट खाली है',
    favouritesTitle: 'पसंदीदा',
    suggestionsTitle: 'आपके पसंदीदा से प्रेरित',
    emptyFavouritesTitle: 'अब तक कोइ पसंदीदा नहीं',
    emptyFavouritesText: 'लगता है कि आपने अभी तक अपने \nपसंदीदा में कोई उत्पाद नहीं डाला है',
    wholesale: 'थोक',
    retail: 'खुदरा',
    quantity: 'मात्रा:',
    total: 'कुल: ',
}

export const initialData = {
    userData: {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
    },
    currentProduct: 'prod-1',
    products: [
        {
            id: 'prod-1',
            name: 'Kerala saree',
            price: 200,
            original: 300,
            images: [saree1, saree2, saree3],
            quantity: 100,
            isFav: false,
            isCart: false,
            details: {
                dimensions: '200 x 200 x 1.5 cms',
                pattern: 'Polka dots',
                fabric: 'Cotton',
                color: 'Red',
            }
        }, {
            id: 'prod-2',
            name: 'Banarasi saree',
            price: 500,
            original: 700,
            images: [saree4, saree2, saree3],
            quantity: 100,
            isFav: false,
            isCart: false,
            details: {
                dimensions: '200 x 200 x 1.5 cms',
                pattern: 'Polka dots',
                fabric: 'Cotton',
                color: 'Red',
            }
        }, {
            id: 'prod-3',
            name: 'Lucknow saree',
            price: 400,
            original: 500,
            images: [saree2, saree5, saree3],
            quantity: 100,
            isFav: false,
            isCart: false,
            details: {
                dimensions: '200 x 200 x 1.5 cms',
                pattern: 'Polka dots',
                fabric: 'Cotton',
                color: 'Red',
            }
        }, {
            id: 'prod-4',
            name: 'Maharashtra saree',
            price: 800,
            original: 900,
            images: [saree5, saree2, saree4],
            quantity: 100,
            isFav: false,
            isCart: false,
            details: {
                dimensions: '200 x 200 x 1.5 cms',
                pattern: 'Polka dots',
                fabric: 'Cotton',
                color: 'Red',
            }
        }, {
            id: 'prod-5',
            name: 'Bengali saree',
            price: 700,
            original: 800,
            images: [saree3, saree2, saree5],
            quantity: 100,
            isFav: false,
            isCart: false,
            details: {
                dimensions: '200 x 200 x 1.5 cms',
                pattern: 'Polka dots',
                fabric: 'Cotton',
                color: 'Red',
            }
        },
    ]
}