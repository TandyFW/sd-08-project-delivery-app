const { createHash } = require('crypto');

/**
 * Given a string returns the md5 in hex encoding
 * @see {@link https://gist.github.com/kitek/1579117| NodeJS create md5 hash from string}
 * @see {@link https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options| Crypto docs}
 * @param {String} rawString - The string to be hashed
 * @returns {String} The hashed string
 */
const md5 = (string) => {
  const hash = createHash('md5');
  hash.update(string);
  return hash.digest('hex');
};

module.exports = md5;
