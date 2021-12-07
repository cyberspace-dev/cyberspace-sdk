"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static convert(timestamp) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        let date = new Date(timestamp).toLocaleDateString('en-GB', options);
        while (date.indexOf('/') > -1)
            date = date.replace('/', '.');
        return date;
    }
}
exports.Utils = Utils;
