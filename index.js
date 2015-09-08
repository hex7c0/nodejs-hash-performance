'use strict';
/**
 * @file nodejs-hash-performance main
 * @module nodejs-hash-performance
 * @subpackage main
 * @version 0.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
var crypto = require('crypto');

/*
 * functions
 */
/**
 * main
 * 
 * @exports hashes
 * @function hashes
 * @param {String|Buffer} raw - Check README.md
 * @param {String} hash - Check README.md
 * @param {String} encoding - Check README.md
 * @return {Object}
 */
function hashes(raw, hash, encoding) {

  return crypto.createHash(hash).update(raw).digest(encoding);
}
module.exports = hashes;
