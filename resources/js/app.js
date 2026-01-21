import axios from 'axios';
import { Application } from '@hotwired/stimulus';
import BoardController from "./controllers/board";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const application = Application.start();
application.register("board", BoardController);
