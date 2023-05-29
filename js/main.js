import SoftScroll from "./modules/soft_scroll_data-anime.js";
import TabNav from "./modules/tabs_data-anime.js";
import Accordion from "./modules/accordion_data-anime.js";
import Modal from "./modules/modal_data-modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/menu_dropdown.js";
import initMenuMobile from "./modules/menu_moblie.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimal from "./modules/number_animals_fetch.js";
import fetchBitcoin from "./modules/bitcon_fetch.js";

import ScrollAnime from "./modules/scroll_anime_data-anime.js";

const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]');
softScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();


const scrollAnime = new ScrollAnime('[data-anime="scroll"]');
scrollAnime.init();

initDropdownMenu();
initMenuMobile();
initDropdownMenu();
initFuncionamento();


fetchAnimal("./js/jsons/animalsApi.json", ".numbers-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");


