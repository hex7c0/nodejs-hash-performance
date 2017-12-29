# nodejs-hash-performance

Benchmarks for nodejs `crypto.getHashes()` or just a wrapper for hash function

## Installation

Install through NPM

```bash
npm install nodejs-hash-performance
```
or
```bash
git clone git://github.com/hex7c0/nodejs-hash-performance.git
```

## API

inside nodejs project
```js
var hash = require('nodejs-hash-performance');

hash('ciao', 'md5', 'base64');
```

### nodejs-hash-performance(raw, hash, encoding)

#### options

 - `raw` - **String | Buffer** Your Data *(default "required")*
 - `hash`- **String** Type of Hash *(default "required")*
 - `encoding`- **String** Type of Encoding *(default "required")*

### [License GPLv3](LICENSE)

## Benchmark

Look at
[![Linux](https://img.shields.io/travis/hex7c0/nodejs-hash-performance.svg?label=linux-osx)](https://travis-ci.org/hex7c0/nodejs-hash-performance)
and
[![Windows](https://img.shields.io/appveyor/ci/hex7c0/nodejs-hash-performance.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/nodejs-hash-performance)
for latest run

```bash
$ npm run-script test

> node benchmark/index.js

> node benchmark/body-100.js
  100 body

   buffer-base64-DSA                     x 187,161 ops/sec ±4.32% (126 runs sampled)
   buffer-base64-DSA-SHA                 x 219,628 ops/sec ±3.44% (131 runs sampled)
   buffer-base64-DSA-SHA1                x 204,414 ops/sec ±3.60% (130 runs sampled)
   buffer-base64-DSA-SHA1-old            x 206,407 ops/sec ±3.64% (130 runs sampled)
   buffer-base64-RSA-MD4                 x 227,863 ops/sec ±3.86% (132 runs sampled)
   buffer-base64-RSA-MD5                 x 234,700 ops/sec ±3.27% (137 runs sampled)
   buffer-base64-RSA-MDC2                x  65,774 ops/sec ±1.78% (145 runs sampled)
   buffer-base64-RSA-RIPEMD160           x 201,614 ops/sec ±2.92% (138 runs sampled)
   buffer-base64-RSA-SHA                 x 219,023 ops/sec ±2.92% (137 runs sampled)
   buffer-base64-RSA-SHA1                x 231,298 ops/sec ±2.95% (138 runs sampled)
   buffer-base64-RSA-SHA1-2              x 223,516 ops/sec ±2.73% (139 runs sampled)
   buffer-base64-RSA-SHA224              x 199,394 ops/sec ±3.06% (135 runs sampled)
   buffer-base64-RSA-SHA256              x 195,677 ops/sec ±2.59% (138 runs sampled)
   buffer-base64-RSA-SHA384              x 192,534 ops/sec ±2.62% (137 runs sampled)
   buffer-base64-RSA-SHA512              x 186,051 ops/sec ±3.21% (139 runs sampled)
   buffer-base64-dsaEncryption           x 223,414 ops/sec ±3.39% (133 runs sampled)
   buffer-base64-dsaWithSHA              x 220,237 ops/sec ±3.31% (136 runs sampled)
   buffer-base64-dsaWithSHA1             x 221,426 ops/sec ±3.32% (135 runs sampled)
   buffer-base64-dss1                    x 226,075 ops/sec ±3.03% (135 runs sampled)
   buffer-base64-ecdsa-with-SHA1         x 235,104 ops/sec ±2.64% (139 runs sampled)
   buffer-base64-md4                     x 247,518 ops/sec ±3.04% (134 runs sampled)
   buffer-base64-md4WithRSAEncryption    x 227,675 ops/sec ±3.47% (133 runs sampled)
   buffer-base64-md5                     x 227,109 ops/sec ±3.46% (132 runs sampled)
   buffer-base64-md5WithRSAEncryption    x 227,380 ops/sec ±3.12% (139 runs sampled)
   buffer-base64-mdc2                    x  67,032 ops/sec ±1.47% (143 runs sampled)
   buffer-base64-mdc2WithRSA             x  65,235 ops/sec ±1.65% (142 runs sampled)
   buffer-base64-ripemd                  x 205,518 ops/sec ±2.87% (136 runs sampled)
   buffer-base64-ripemd160               x 209,710 ops/sec ±2.81% (136 runs sampled)
   buffer-base64-ripemd160WithRSA        x 200,341 ops/sec ±2.85% (137 runs sampled)
   buffer-base64-rmd160                  x 203,337 ops/sec ±2.94% (139 runs sampled)
   buffer-base64-sha                     x 219,928 ops/sec ±2.85% (138 runs sampled)
   buffer-base64-sha1                    x 240,746 ops/sec ±2.88% (133 runs sampled)
   buffer-base64-sha1WithRSAEncryption   x 231,517 ops/sec ±2.83% (138 runs sampled)
   buffer-base64-sha224                  x 204,021 ops/sec ±2.97% (136 runs sampled)
   buffer-base64-sha224WithRSAEncryption x 185,442 ops/sec ±3.25% (137 runs sampled)
   buffer-base64-sha256                  x 203,676 ops/sec ±2.52% (138 runs sampled)
   buffer-base64-sha256WithRSAEncryption x 198,589 ops/sec ±2.31% (142 runs sampled)
   buffer-base64-sha384                  x 207,968 ops/sec ±2.56% (137 runs sampled)
   buffer-base64-sha384WithRSAEncryption x 199,557 ops/sec ±2.33% (131 runs sampled)
   buffer-base64-sha512                  x 212,032 ops/sec ±2.43% (139 runs sampled)
   buffer-base64-sha512WithRSAEncryption x 204,729 ops/sec ±2.35% (135 runs sampled)
   buffer-base64-shaWithRSAEncryption    x 211,839 ops/sec ±2.73% (137 runs sampled)
   buffer-base64-ssl2-md5                x 233,744 ops/sec ±3.24% (136 runs sampled)
   buffer-base64-ssl3-md5                x 238,307 ops/sec ±3.19% (135 runs sampled)
   buffer-base64-ssl3-sha1               x 234,364 ops/sec ±2.77% (138 runs sampled)
   buffer-base64-whirlpool               x 142,299 ops/sec ±2.08% (135 runs sampled)
Fastest is: buffer-base64-md4

> node benchmark/body-1000.js
  1000 body

   buffer-base64-DSA                     x 166,439 ops/sec ±1.70% (136 runs sampled)
   buffer-base64-DSA-SHA                 x 159,595 ops/sec ±2.22% (138 runs sampled)
   buffer-base64-DSA-SHA1                x 162,679 ops/sec ±2.29% (134 runs sampled)
   buffer-base64-DSA-SHA1-old            x 159,410 ops/sec ±2.39% (134 runs sampled)
   buffer-base64-RSA-MD4                 x 182,226 ops/sec ±2.42% (135 runs sampled)
   buffer-base64-RSA-MD5                 x 155,493 ops/sec ±2.51% (129 runs sampled)
   buffer-base64-RSA-MDC2                x   8,919 ops/sec ±1.02% (141 runs sampled)
   buffer-base64-RSA-RIPEMD160           x  88,350 ops/sec ±2.54% (141 runs sampled)
   buffer-base64-RSA-SHA                 x 112,385 ops/sec ±2.04% (137 runs sampled)
   buffer-base64-RSA-SHA1                x 161,360 ops/sec ±2.37% (136 runs sampled)
   buffer-base64-RSA-SHA1-2              x 153,985 ops/sec ±2.46% (140 runs sampled)
   buffer-base64-RSA-SHA224              x  85,118 ops/sec ±1.77% (140 runs sampled)
   buffer-base64-RSA-SHA256              x  86,173 ops/sec ±1.32% (137 runs sampled)
   buffer-base64-RSA-SHA384              x 106,844 ops/sec ±1.82% (136 runs sampled)
   buffer-base64-RSA-SHA512              x 105,889 ops/sec ±2.06% (136 runs sampled)
   buffer-base64-dsaEncryption           x 157,135 ops/sec ±2.45% (139 runs sampled)
   buffer-base64-dsaWithSHA              x 150,480 ops/sec ±2.59% (138 runs sampled)
   buffer-base64-dsaWithSHA1             x 157,872 ops/sec ±2.29% (138 runs sampled)
   buffer-base64-dss1                    x 159,124 ops/sec ±2.26% (135 runs sampled)
   buffer-base64-ecdsa-with-SHA1         x 158,226 ops/sec ±2.42% (139 runs sampled)
   buffer-base64-md4                     x 181,827 ops/sec ±2.87% (136 runs sampled)
   buffer-base64-md4WithRSAEncryption    x 175,442 ops/sec ±2.53% (141 runs sampled)
   buffer-base64-md5                     x 161,603 ops/sec ±2.43% (138 runs sampled)
   buffer-base64-md5WithRSAEncryption    x 150,247 ops/sec ±2.98% (132 runs sampled)
   buffer-base64-mdc2                    x   7,897 ops/sec ±0.71% (135 runs sampled)
   buffer-base64-mdc2WithRSA             x   8,691 ops/sec ±0.74% (142 runs sampled)
   buffer-base64-ripemd                  x  91,777 ops/sec ±1.93% (143 runs sampled)
   buffer-base64-ripemd160               x  94,063 ops/sec ±2.04% (135 runs sampled)
   buffer-base64-ripemd160WithRSA        x  95,436 ops/sec ±1.69% (136 runs sampled)
   buffer-base64-rmd160                  x  95,770 ops/sec ±1.55% (137 runs sampled)
   buffer-base64-sha                     x 112,190 ops/sec ±2.25% (140 runs sampled)
   buffer-base64-sha1                    x 163,490 ops/sec ±2.27% (135 runs sampled)
   buffer-base64-sha1WithRSAEncryption   x 160,648 ops/sec ±2.17% (135 runs sampled)
   buffer-base64-sha224                  x  85,595 ops/sec ±1.73% (144 runs sampled)
   buffer-base64-sha224WithRSAEncryption x  84,641 ops/sec ±1.74% (139 runs sampled)
   buffer-base64-sha256                  x  85,810 ops/sec ±1.67% (136 runs sampled)
   buffer-base64-sha256WithRSAEncryption x  83,982 ops/sec ±1.69% (136 runs sampled)
   buffer-base64-sha384                  x 107,151 ops/sec ±1.80% (140 runs sampled)
   buffer-base64-sha384WithRSAEncryption x 106,483 ops/sec ±1.76% (144 runs sampled)
   buffer-base64-sha512                  x 107,762 ops/sec ±1.95% (140 runs sampled)
   buffer-base64-sha512WithRSAEncryption x 104,306 ops/sec ±2.11% (139 runs sampled)
   buffer-base64-shaWithRSAEncryption    x 103,841 ops/sec ±1.90% (139 runs sampled)
   buffer-base64-ssl2-md5                x 132,871 ops/sec ±3.29% (133 runs sampled)
   buffer-base64-ssl3-md5                x 139,637 ops/sec ±2.90% (134 runs sampled)
   buffer-base64-ssl3-sha1               x 147,666 ops/sec ±2.64% (137 runs sampled)
   buffer-base64-whirlpool               x  50,805 ops/sec ±1.20% (144 runs sampled)
Fastest is: buffer-base64-RSA-MD4

> node benchmark/body-10000.js
  10000 body

   buffer-base64-DSA                     x 39,261 ops/sec ±0.55% (142 runs sampled)
   buffer-base64-DSA-SHA                 x 39,646 ops/sec ±0.80% (145 runs sampled)
   buffer-base64-DSA-SHA1                x 39,179 ops/sec ±1.23% (137 runs sampled)
   buffer-base64-DSA-SHA1-old            x 39,221 ops/sec ±1.42% (138 runs sampled)
   buffer-base64-RSA-MD4                 x 51,224 ops/sec ±1.10% (137 runs sampled)
   buffer-base64-RSA-MD5                 x 38,595 ops/sec ±1.04% (142 runs sampled)
   buffer-base64-RSA-MDC2                x    928 ops/sec ±0.98% (136 runs sampled)
   buffer-base64-RSA-RIPEMD160           x 14,693 ops/sec ±0.27% (142 runs sampled)
   buffer-base64-RSA-SHA                 x 18,961 ops/sec ±0.54% (140 runs sampled)
   buffer-base64-RSA-SHA1                x 39,390 ops/sec ±0.99% (146 runs sampled)
   buffer-base64-RSA-SHA1-2              x 39,380 ops/sec ±1.28% (137 runs sampled)
   buffer-base64-RSA-SHA224              x 12,816 ops/sec ±0.88% (136 runs sampled)
   buffer-base64-RSA-SHA256              x 12,586 ops/sec ±0.61% (140 runs sampled)
   buffer-base64-RSA-SHA384              x 19,182 ops/sec ±0.70% (142 runs sampled)
   buffer-base64-RSA-SHA512              x 19,015 ops/sec ±0.60% (147 runs sampled)
   buffer-base64-dsaEncryption           x 39,021 ops/sec ±1.13% (145 runs sampled)
   buffer-base64-dsaWithSHA              x 39,558 ops/sec ±0.99% (145 runs sampled)
   buffer-base64-dsaWithSHA1             x 39,067 ops/sec ±0.90% (141 runs sampled)
   buffer-base64-dss1                    x 39,244 ops/sec ±1.20% (142 runs sampled)
   buffer-base64-ecdsa-with-SHA1         x 39,825 ops/sec ±1.16% (137 runs sampled)
   buffer-base64-md4                     x 49,640 ops/sec ±1.25% (143 runs sampled)
   buffer-base64-md4WithRSAEncryption    x 47,556 ops/sec ±1.42% (137 runs sampled)
   buffer-base64-md5                     x 37,805 ops/sec ±1.42% (142 runs sampled)
   buffer-base64-md5WithRSAEncryption    x 39,677 ops/sec ±1.16% (140 runs sampled)
   buffer-base64-mdc2                    x    960 ops/sec ±0.33% (137 runs sampled)
   buffer-base64-mdc2WithRSA             x    955 ops/sec ±0.32% (137 runs sampled)
   buffer-base64-ripemd                  x 14,701 ops/sec ±0.48% (140 runs sampled)
   buffer-base64-ripemd160               x 14,759 ops/sec ±0.58% (137 runs sampled)
   buffer-base64-ripemd160WithRSA        x 14,932 ops/sec ±0.88% (136 runs sampled)
   buffer-base64-rmd160                  x 14,388 ops/sec ±0.60% (146 runs sampled)
   buffer-base64-sha                     x 18,746 ops/sec ±0.54% (146 runs sampled)
   buffer-base64-sha1                    x 39,584 ops/sec ±1.49% (139 runs sampled)
   buffer-base64-sha1WithRSAEncryption   x 40,532 ops/sec ±1.13% (139 runs sampled)
   buffer-base64-sha224                  x 13,179 ops/sec ±0.92% (137 runs sampled)
   buffer-base64-sha224WithRSAEncryption x 12,925 ops/sec ±0.94% (137 runs sampled)
   buffer-base64-sha256                  x 12,519 ops/sec ±0.79% (143 runs sampled)
   buffer-base64-sha256WithRSAEncryption x 12,969 ops/sec ±1.04% (137 runs sampled)
   buffer-base64-sha384                  x 19,280 ops/sec ±0.61% (140 runs sampled)
   buffer-base64-sha384WithRSAEncryption x 19,277 ops/sec ±0.70% (143 runs sampled)
   buffer-base64-sha512                  x 19,629 ops/sec ±0.73% (138 runs sampled)
   buffer-base64-sha512WithRSAEncryption x 19,515 ops/sec ±0.95% (137 runs sampled)
   buffer-base64-shaWithRSAEncryption    x 19,423 ops/sec ±0.85% (139 runs sampled)
   buffer-base64-ssl2-md5                x 40,502 ops/sec ±1.07% (138 runs sampled)
   buffer-base64-ssl3-md5                x 39,755 ops/sec ±1.12% (138 runs sampled)
   buffer-base64-ssl3-sha1               x 39,776 ops/sec ±1.29% (139 runs sampled)
   buffer-base64-whirlpool               x  7,176 ops/sec ±0.73% (137 runs sampled)
Fastest is: buffer-base64-md4WithRSAEncryption
```
