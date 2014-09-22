"use strict";
/**
 * @file hash-performance main
 * @module hash-performance
 * @package hash-performance
 * @subpackage main
 * @version 0.0.2
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var crypto = require('crypto');
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * functions
 */
/**
 * main
 * 
 * @exports hash
 * @function hash
 * @param {String|Buffer} raw - Check README.md
 * @param {String} hash - Check README.md
 * @param {String} encoding - Check README.md
 * @return {Object}
 */
module.exports = function hash(raw, hash, encoding) {

    return crypto.createHash(hash).update(raw).digest(encoding);
};
