import SoftScroll from "./modules/animations/soft_scroll_data-anime.js";
import TabNav from "./modules/animations/tabs_data-anime.js";
import Accordion from "./modules/animations/accordion_data-anime.js";
import Modal from "./modules/modals/modal_data-modal.js";
import Tooltip from "./modules/tooltips/tooltip.js";
import DropdownMenu from "./modules/menu/menu_dropdown.js";
import MenuMobile from "./modules/menu/menu_moblie.js";
import Opening from "./modules/operations/opening.js";
import fetchAnimal from "./modules/fetcheis/number_animals_fetch.js";
import fetchBitcoin from "./modules/fetcheis/bitcon_fetch.js";
import ScrollAnime from "./modules/animations/scroll_anime_data-anime.js";
import SlideNav from "./modules/slides/slidenav.js";

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

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const opening = new Opening("[data-week]", "open");
opening.init();

fetchAnimal("./js/jsons/animalsApi.json", ".numbers-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-price");

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-control");
