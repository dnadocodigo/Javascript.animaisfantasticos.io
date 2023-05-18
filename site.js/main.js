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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs_data_anime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs_data-anime.js */ \"./js/modules/tabs_data-anime.js\");\n/* harmony import */ var _modules_accordion_data_anime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion_data-anime.js */ \"./js/modules/accordion_data-anime.js\");\n/* harmony import */ var _modules_soft_scroll_data_anime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/soft_scroll_data-anime.js */ \"./js/modules/soft_scroll_data-anime.js\");\n/* harmony import */ var _modules_soft_scroll_animation_data_anime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/soft_scroll_animation_data-anime.js */ \"./js/modules/soft_scroll_animation_data-anime.js\");\n/* harmony import */ var _modules_modal_data_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal_data-modal.js */ \"./js/modules/modal_data-modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu_dropdown.js */ \"./js/modules/menu_dropdown.js\");\n/* harmony import */ var _modules_menu_moblie_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu_moblie.js */ \"./js/modules/menu_moblie.js\");\n/* harmony import */ var _modules_anime_number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/anime_number.js */ \"./js/modules/anime_number.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_number_animals_fetch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/number_animals_fetch.js */ \"./js/modules/number_animals_fetch.js\");\n/* harmony import */ var _modules_bitcon_fetch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/bitcon_fetch.js */ \"./js/modules/bitcon_fetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tabs_data_anime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_accordion_data_anime_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_soft_scroll_data_anime_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_soft_scroll_animation_data_anime_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_data_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_moblie_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_anime_number_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_number_animals_fetch_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n;(0,_modules_bitcon_fetch_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/main.js?");

/***/ }),

/***/ "./js/modules/accordion_data-anime.js":
/*!********************************************!*\
  !*** ./js/modules/accordion_data-anime.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initAccordionList = () => {\n  const accordionList = document.querySelectorAll(\n    '[data-anime=\"accordion\"] dt',\n  );\n  const activeClass = \"ativo\";\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    const activeAccordionList = (event) => {\n      console.log(event.currentTarget.classList.toggle(activeClass));\n      console.log(\n        event.currentTarget.nextElementSibling.classList.toggle(activeClass),\n      );\n    };\n    accordionList.forEach((item) => {\n      item.addEventListener(\"click\", activeAccordionList);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAccordionList);\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/accordion_data-anime.js?");

/***/ }),

/***/ "./js/modules/anime_number.js":
/*!************************************!*\
  !*** ./js/modules/anime_number.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initAnimeNumber = () => {\r\n  function animeNumber() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n  let observer;\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      observer.disconnect();\r\n      animeNumber();\r\n    }\r\n  }\r\n  const observsrTarget = document.querySelector(\".numero\");\r\n  observer = new MutationObserver(handleMutation);\r\n  observer.observe(observsrTarget, { attributes: true });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimeNumber);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/anime_number.js?");

/***/ }),

/***/ "./js/modules/bitcon_fetch.js":
/*!************************************!*\
  !*** ./js/modules/bitcon_fetch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initFetchBitcoin = () => {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((response) => response.json())\r\n    .then((bitcoin) => {\r\n      const preco = document.querySelector(\".btc-preco\");\r\n      preco.innerHTML = (100 / bitcoin.BRL.sell).toFixed(5);\r\n    })\r\n    .catch((erro) => console.log(Error(erro)));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchBitcoin);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/bitcon_fetch.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initFuncionamento = () => {\r\n  const funcionanmento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionanmento.dataset.semana.split(\",\").map(Number);\r\n  const horarioFuncionamento = funcionanmento.dataset.horario\r\n    .split(\",\")\r\n    .map(Number);\r\n  const dataAtual = new Date();\r\n\r\n  const diaAtusl = dataAtual.getDay();\r\n  const horaAtual = dataAtual.getHours();\r\n\r\n  const estaAbeto = diasSemana.indexOf(diaAtusl) !== -1;\r\n  const horarioAbertura =\r\n    horaAtual >= horarioFuncionamento[0] && horaAtual < horarioFuncionamento[1];\r\n \r\n  if (estaAbeto && horarioAbertura) {\r\n    funcionanmento.classList.add(\"aberto\");\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFuncionamento);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu_dropdown.js":
/*!*************************************!*\
  !*** ./js/modules/menu_dropdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outside_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside_events.js */ \"./js/modules/outside_events.js\");\n\r\n\r\nconst initDropdownMenu = () => {\r\n  const dropdwnMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"ativo\");\r\n    (0,_outside_events_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\r\n      this.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n  dropdwnMenus.forEach((menu) => {\r\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropdownMenu);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/menu_dropdown.js?");

/***/ }),

/***/ "./js/modules/menu_moblie.js":
/*!***********************************!*\
  !*** ./js/modules/menu_moblie.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outside_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside_events.js */ \"./js/modules/outside_events.js\");\n\r\n\r\nconst initMenuMobile = () => {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  if (menuButton) {\r\n    const openMenu = () => {\r\n      menuButton.classList.add(\"ativo\");\r\n      menuList.classList.add(\"ativo\");\r\n      (0,_outside_events_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n        menuButton.classList.remove(\"ativo\");\r\n        menuList.classList.remove(\"ativo\");\r\n      });\r\n    };\r\n\r\n    eventos.forEach((userEvent) =>\r\n      menuButton.addEventListener(userEvent, openMenu),\r\n    );\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/menu_moblie.js?");

/***/ }),

/***/ "./js/modules/modal_data-modal.js":
/*!****************************************!*\
  !*** ./js/modules/modal_data-modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initModal = () => {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  const toggleModal = (event) => {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  };\r\n\r\n  function clickForaModal(event) {\r\n    if (event.target === this) {\r\n      toggleModal(event);\r\n    }\r\n  }\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    botaoAbrir.addEventListener(\"click\", toggleModal);\r\n    botaoFechar.addEventListener(\"click\", toggleModal);\r\n    containerModal.addEventListener(\"click\", clickForaModal);\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/modal_data-modal.js?");

/***/ }),

/***/ "./js/modules/number_animals_fetch.js":
/*!********************************************!*\
  !*** ./js/modules/number_animals_fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _anime_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime_number.js */ \"./js/modules/anime_number.js\");\n\r\n\r\nconst initNumberFetchAnimals = () => {\r\n  function createAnimalsElement(animal) {\r\n    const createDiv = document.createElement(\"div\");\r\n    createDiv.classList.add(\"numero-animal\");\r\n    createDiv.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n    return createDiv;\r\n  }\r\n  async function fetchAnimals(url) {\r\n    try {\r\n      const animalsResponses = await fetch(url);\r\n      const animalsJSON = await animalsResponses.json();\r\n      const numberGrid = document.querySelector(\".numeros-grid\");\r\n      animalsJSON.forEach((animal) => {\r\n        const divAnimal = createAnimalsElement(animal);\r\n        numberGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_anime_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  fetchAnimals(\"./js/jsons/animalsApi.json\");\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNumberFetchAnimals);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/number_animals_fetch.js?");

/***/ }),

/***/ "./js/modules/outside_events.js":
/*!**************************************!*\
  !*** ./js/modules/outside_events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction outsideEvents(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n\r\n      callback();\r\n    }\r\n  }\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      }, 0);\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideEvents);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/outside_events.js?");

/***/ }),

/***/ "./js/modules/soft_scroll_animation_data-anime.js":
/*!********************************************************!*\
  !*** ./js/modules/soft_scroll_animation_data-anime.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initSoftScrollAnimation = () => {\r\n  const scrollSection = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const halfScreen = window.innerHeight * 0.6;\r\n\r\n  const animatedScroll = () => {\r\n    scrollSection.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n\r\n      const isSectionVisible = sectionTop - halfScreen < 0;\r\n\r\n      if (isSectionVisible) {\r\n        section.classList.add(\"ativo\");\r\n      } else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  };\r\n\r\n  if (scrollSection.length) {\r\n    animatedScroll();\r\n    window.addEventListener(\"scroll\", animatedScroll);\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSoftScrollAnimation);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/soft_scroll_animation_data-anime.js?");

/***/ }),

/***/ "./js/modules/soft_scroll_data-anime.js":
/*!**********************************************!*\
  !*** ./js/modules/soft_scroll_data-anime.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initSoftScroll = () => {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"soft\"] a[href^=\"#\"]',\r\n  );\r\n\r\n  const softScrollToSection = (event) => {\r\n    event.preventDefault();\r\n    const selectHref = event.currentTarget.getAttribute(\"href\");\r\n    const selectSection = document.querySelector(selectHref);\r\n\r\n    selectSection.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", softScrollToSection);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSoftScroll);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/soft_scroll_data-anime.js?");

/***/ }),

/***/ "./js/modules/tabs_data-anime.js":
/*!***************************************!*\
  !*** ./js/modules/tabs_data-anime.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initActiveTabs = () => {\r\n  const tabMenu = document.querySelectorAll('[data-tab = \"menu\"] li');\r\n  const tabContent = document.querySelectorAll(\r\n    '[data-tab = \"content\"] section',\r\n  );\r\n  const activeClass = \"ativo\";\r\n\r\n  tabContent[0].classList.add(activeClass);\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    const activeTab = (index) => {\r\n      const addDataAnime = tabContent[index].dataset.anime;\r\n\r\n      tabContent.forEach((item) => {\r\n        item.classList.remove(activeClass);\r\n      });\r\n      tabContent[index].classList.add(activeClass);\r\n      tabContent[index].classList.add(addDataAnime);\r\n    };\r\n\r\n    tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initActiveTabs);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/tabs_data-anime.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initTooltip = () => {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleavw\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n  function criarTooltipsBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const tooltipText = element.getAttribute(\"aria-label\");\r\n\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = tooltipText;\r\n\r\n    document.body.appendChild(tooltipBox);\r\n\r\n    return tooltipBox;\r\n  }\r\n  function onMouseOver(event) {\r\n    const tooltipBox = criarTooltipsBox(this);\r\n    tooltipBox.style.top = `${event.pageY}px`;\r\n    tooltipBox.style.left = `${event.pageX}px`;\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);\r\n\n\n//# sourceURL=webpack://animais_eslint/./js/modules/tooltip.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;