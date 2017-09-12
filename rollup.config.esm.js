import config from './rollup.config.umd.js';
import {LIBRARY_NAME,PATH_DIST} from './config-library.js'
config.format = "es";
config.dest = PATH_DIST+LIBRARY_NAME+".esm.js";
export default config;
