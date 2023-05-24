import TabNav from "./modules/tabs_data-anime.js";
import Accordion from "./modules/accordion_data-anime.js";
import Modal from "./modules/modal_data-modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/menu_dropdown.js";
import initMenuMobile from "./modules/menu_moblie.js";
import initAnimeNumber from "./modules/anime_number.js";
import initFuncionamento from "./modules/funcionamento.js";
import initNumberFetchAnimals from "./modules/number_animals_fetch.js";
import initFetchBitcoin from "./modules/bitcon_fetch.js";
import SoftScroll from "./modules/soft_scroll_data-anime.js";

import initSoftScrollAnimation from "./modules/soft_scroll_animation_data-anime.js";

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
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initDropdownMenu();
initAnimeNumber();
initFuncionamento();
initNumberFetchAnimals();
initFetchBitcoin();

initSoftScrollAnimation();
