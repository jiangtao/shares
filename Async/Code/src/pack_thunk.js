/**
 * Created by jiangtao on 2/1/16.
 */

import fs from 'fs';
import util from 'util';
import thunk from './thunk';

export const readFile = thunk(fs.readFile);
export const readdir = thunk(fs.readdir);