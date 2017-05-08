/**
 * Created by jiangtao on 2/1/16.
 */
import fs from 'fs';
import path from 'path';
import thunkify from 'thunkify';


export const readFile = thunkify(fs.readFile);
export const readdir = thunkify(fs.readdir);