"use strict";

const fs = require("fs");
const path = require("path");
const paths = require("./path-factory").get();

const Helper = {
    mkdirRecursive(dir, mode) {
        mode = mode === undefined ? 0o777 : mode;

        if (fs.existsSync(dir)) {
            return true;
        }

        let top = path.dirname(dir);
        if (!fs.existsSync(top)) {
            Helper.mkdirRecursive(top, mode);
        }
        fs.mkdirSync(dir, mode);

        return fs.existsSync(dir);
    },
    generateEntryPath(page) {
        return `${paths.page}/${page}/entry.js`;
    },
    generateViewPath(page) {
        return `${paths.page}/${page}/view.js`;
    }
};

module.exports = Helper;