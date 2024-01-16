/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n\r\n\r\nfunction createButtons() {\r\n    const aboutButton = document.querySelector('.about-button')\r\n    const menuButton = document.querySelector('.menu-button')\r\n    const contactButton = document.querySelector('.contact-button')\r\n\r\n    aboutButton.addEventListener('click', displayAbout)\r\n    menuButton.addEventListener('click', displayMenu)\r\n    contactButton.addEventListener('click', displayContact)\r\n}\r\n\r\nfunction displayAbout() {\r\n    (0,_modules_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n}\r\n\r\nfunction displayMenu() {\r\n    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n}\r\n\r\nfunction displayContact() {\r\n    (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n}\r\n\r\ncreateButtons()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\r\n    const about = document.createElement('div')\r\n    about.classList.add('about')\r\n    const aboutHeader = document.createElement('h2')\r\n    aboutHeader.textContent = 'About'\r\n    const aboutText = document.createElement('p')\r\n    //backticks allow the text be formmattd like this and innerhtml alloes the use of <br> for new lines, this is fine since this is trusted text\r\n    aboutText.innerHTML = ` \r\n    In the bustling streets of Japan, Genji, the enigmatic cybernetic ninja, has embarked on a new venture that transcends his warrior past. \r\n    Introducing \"The Hungry Dragon\", a unique and innovative restaurant that blends the ancient traditions of Japan with futuristic culinary \r\n    experiences. Nestled in the heart of Genji's homeland, this dining establishment is a testament to his journey of self-discovery and \r\n    cultural fusion. <br> <br>\r\n\r\n    \"The Hungry Dragon\" exudes an ambiance that seamlessly marries the serenity of traditional Japanese aesthetics with the sleek, \r\n    cutting-edge design reflective of Genji's cybernetic enhancements. The restaurant offers a diverse menu inspired by both classic Japanese \r\n    cuisine and modern gastronomic trends. Inspired from his many comrades in his Overwatch days, each dish at \r\n    The Hungry Dragon tells a tale of tradition meeting innovation. <br> <br>\r\n\r\n    Genji, once a fierce warrior, now channels his disciplined focus into the culinary realm. His commitment to excellence is evident in every \r\n    aspect of the dining experience, from the artfully presented dishes to the personalized service that mirrors the precision of a ninja's \r\n    movements. The staff, clad in a modern interpretation of traditional ninja attire, adds an element of theatricality to the dining adventure. <br> <br>\r\n\r\n    \"The Hungry Dragon\" has quickly become a sensation, drawing locals and tourists alike who seek a taste of Genji's culinary vision. \r\n    As patrons savor the flavors of Japan in this cybernetic haven, they not only enjoy a feast for the senses but also witness the evolution \r\n    of a warrior into a masterful chef. Genji's restaurant symbolizes the harmonious coexistence of tradition and technology, where the legacy \r\n    of the past meets the possibilities of the future in a delightful celebration of Japanese cuisine. <br> <br>\r\n    `\r\n    about.appendChild(aboutHeader)\r\n    about.appendChild(aboutText)\r\n    return about\r\n}\r\n\r\nfunction addAbout() {\r\n    const info = document.querySelector('.info') //create new container and wipe the old one, then append teh new madule we want\r\n    info.innerHTML = ''\r\n    info.appendChild(createAbout())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const contact = document.createElement('div')\r\n    contact.classList.add('contact')\r\n\r\n    const contactHeader = document.createElement('h1')\r\n    contactHeader.textContent = 'Contact Information'\r\n    contact.appendChild(contactHeader)\r\n\r\n    const ul = document.createElement('ul')\r\n\r\n    const phoneHeader = document.createElement('h2')\r\n    const phoneNumber = document.createElement('li')\r\n    const locationHeader = document.createElement('h2')\r\n    const address = document.createElement('li')\r\n    phoneHeader.textContent = 'Phone'\r\n    phoneNumber.textContent = '+81 (03) 596-2476'\r\n    locationHeader.textContent = 'Location'\r\n    address.textContent = '梅沢ビル, B1 11-10, Kamiyamacho, Shibuya City, Tokyo 150-0047, Japan'\r\n\r\n    ul.appendChild(phoneHeader)\r\n    ul.appendChild(phoneNumber)\r\n    ul.appendChild(locationHeader)\r\n    ul.appendChild(address)\r\n    contact.appendChild(ul)\r\n\r\n    const img = document.createElement('img')\r\n    img.classList.add('address')\r\n    img.src = 'pics/address.JPG'\r\n    img.alt = 'Map of where the restaurant is'\r\n\r\n    contact.appendChild(img)\r\n\r\n    return contact\r\n}\r\n\r\nfunction addContact() {\r\n    const info = document.querySelector('.info')\r\n    info.innerHTML = ''\r\n    info.appendChild(createContact())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n    const menu = document.createElement('div')\r\n    menu.classList.add('menu')\r\n    const menuHeader = document.createElement('h2')\r\n    menuHeader.textContent = 'Menu'\r\n\r\n    menu.appendChild(menuHeader)\r\n\r\n    const ul = document.createElement('ul')\r\n\r\n    ul.appendChild(createMenuItem('Rikimaru Ramen'))\r\n    ul.appendChild(createMenuDescription(`Step into the world of cybernetic ninja mastery with the Rikimaru Ramen, \r\n    a classic favorite of Genji. This ramen dish pays homage to Genji's roots, blending traditional Japanese flavors with a futuristic twist.`))\r\n    \r\n    ul.appendChild(createMenuItem('Tamago Kake Gohan'))\r\n    ul.appendChild(createMenuDescription(`Embark on a culinary journey inspired by the stoic archer and brother of Genji, Hanzo Shimada, with our Tamago Kake Gohan – a dish \r\n    that captures the essence of tranquility and precision. This traditional Japanese comfort food is elevated to\r\n     mirror the refined tastes favored by the Shimada clan.`))\r\n\r\n    ul.appendChild(createMenuItem('Paladin\\'s Currywurst Platter'))\r\n    ul.appendChild(createMenuDescription(`Journey into the hearty realm of Reinhardt with our Paladin's Currywurst Platter – a robust and flavorful homage to the valiant knight of Overwatch.\r\n    Immerse yourself in the bold and comforting essence of this German classic, elevated to match the grandeur of Reinhardt's heroic presence.`))\r\n\r\n    ul.appendChild(createMenuItem('Tibetan Momos Feast'))\r\n    ul.appendChild(createMenuDescription(`Experience tranquility with our Tibetan Momos Feast, a tribute to the serene wisdom of Zenyatta, the spiritual mentor of Genji. \r\n    This dish encapsulates the balance and harmony that define Zenyatta's teachings with delicate dumplings filled with a blend of finely minced vegetables.`))\r\n\r\n    ul.appendChild(createMenuItem('Outlaw\\'s Carne Adovada'))\r\n    ul.appendChild(createMenuDescription(`Saddle up for a bold and fiery adventure with our Carne Adovada, inspired by the rugged cowboy spirit of Cole Cassidy, a close friend of Genji. This dish captures the essence \r\n    of the wild west with a tantalizing blend of spices, slow-cooked perfection, and a touch of cowboy bravado.`))\r\n\r\n    ul.appendChild(createMenuItem('Beat of Bahia Moqueca'))\r\n    ul.appendChild(createMenuDescription(`Immerse yourself in the rhythm of flavor with our Beat of Bahia Moqueca, a culinary masterpiece inspired by the renowned music artist Lucio. \r\n    This vibrant dish transports you to the sun-kissed shores of Brazil, echoing the infectious energy and harmony that Lucio brings to his music.`))\r\n\r\n    ul.appendChild(createMenuItem('Arctic Hearth Roujiamo Buns'))\r\n    ul.appendChild(createMenuDescription(`Step into a world of warmth and flavor with our Roujiamo Pork Buns, a beloved comfort food favored by the brilliant Chinese scientist, Mei. \r\n    Inspired by the chilly landscapes she navigates, this dish is a fusion of cozy textures and savory delights.`))\r\n\r\n    menu.appendChild(ul)\r\n\r\n    return menu\r\n}\r\n\r\nfunction createMenuItem(item) { //these two functions simply make creating the several h3 and li elements for menu items a bit shorter and cleaner\r\n    const menuItem = document.createElement('h3')\r\n    menuItem.textContent = item\r\n\r\n    \r\n    return menuItem\r\n}\r\n\r\nfunction createMenuDescription(description) {\r\n    const menuDescription = document.createElement('li')\r\n    menuDescription.textContent = description \r\n    \r\n    return menuDescription\r\n}\r\n\r\nfunction addMenu() {\r\n    const info = document.querySelector('.info')\r\n    info.textContent = ''\r\n    info.appendChild(createMenu())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('div')\r\n    header.classList.add('header')\r\n    header.textContent = 'The Hungry Dragon'\r\n    const icon = document.createElement('img')\r\n    icon.id = 'chef'\r\n    icon.src = './pics/icon.png'\r\n    icon.alt = 'Chibi Genji in a chef outfit'\r\n    header.appendChild(icon)\r\n    return header //return statement used here so that we can append this later in a single function with the rest of the main page components, and so only needing to export one function\r\n}\r\n\r\nfunction createNav() {\r\n    const nav = document.createElement('div')\r\n    nav.classList.add('nav')\r\n    const ul = document.createElement('ul')\r\n    const about = document.createElement('li')\r\n    const menu = document.createElement('li')\r\n    const contact = document.createElement('li')\r\n    about.textContent = 'About'\r\n    menu.textContent = 'Menu'\r\n    contact.textContent = 'Contact'\r\n    about.classList.add('about-button')\r\n    menu.classList.add('menu-button')\r\n    contact.classList.add('contact-button')\r\n    ul.appendChild(about)\r\n    ul.appendChild(menu)\r\n    ul.appendChild(contact)\r\n    nav.appendChild(ul)\r\n    return nav\r\n}\r\n\r\nfunction createInfo() { //container that we can wipe the textContent/innerHTML to bring a different module\r\n    const info = document.createElement('div')\r\n    info.classList.add('info')\r\n    return info\r\n}\r\n\r\nfunction createGenji() {\r\n    const genji = document.createElement('div')\r\n    genji.classList.add('genji-image')\r\n    const image = document.createElement('img')\r\n    image.src = './pics/genji chef cropped.png'\r\n    image.alt = 'Genji wearing a chef\\'s outfit'\r\n\r\n    genji.appendChild(image)\r\n    return genji\r\n}\r\n\r\nfunction createMain() {\r\n    const content = document.getElementById('content')\r\n    const main = document.createElement('div')\r\n    main.classList.add('main')\r\n\r\n    content.appendChild(createHeader()) // content returns null if script tag in index.html is in the header; appends whatever was returned\r\n    content.appendChild(main)\r\n    main.appendChild(createNav())\r\n    main.appendChild(createInfo())\r\n    main.appendChild(createGenji())\r\n\r\n    ;(0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;