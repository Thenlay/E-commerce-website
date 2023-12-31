import CartScreen from './screens/CartScreen.js';
import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
import SigninScreen from './screens/SigninScreen.js';
import Header from './components/Header.js';
const routes = {
    "/": HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': SigninScreen,
};
const router = async() =>{
    const request = parseRequestUrl();
    console.log(request.id);
    const parseUrl = (request.resource ? `/${request.resource}`: '/') + 
    (request.id ? '/:id': '') + 
    (request.verb ? `/${request.verb}`: '');
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange',router);