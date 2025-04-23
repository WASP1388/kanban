import axios from 'axios';
import BoardController from "./controllers/board";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

application.register("board", BoardController);
