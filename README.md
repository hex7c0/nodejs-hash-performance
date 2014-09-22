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

### nodejs-hash-performance(raw,hash,encoding)

#### options

 - `raw` - **String | Buffer** Your Data *(default "required")*
 - `hash`- **String** Type of Hash *(default "required")*
 - `encoding`- **String** Type of Encoding *(default "required")*

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)

## Benchmark

Look at [Travis](https://travis-ci.org/hex7c0/nodejs-hash-performance/) for latest run

```bash
$ npm run-script test

> node benchmark/index.js

> node benchmark/body-100.js
  100 body

   buffer-base64-DSA                     x 186,665 ops/sec ±3.20% (133 runs sampled)
   buffer-base64-DSA-SHA                 x 178,781 ops/sec ±3.66% (128 runs sampled)
   buffer-base64-DSA-SHA1                x 187,660 ops/sec ±2.98% (137 runs sampled)
   buffer-base64-DSA-SHA1-old            x 178,704 ops/sec ±3.76% (134 runs sampled)
   buffer-base64-RSA-MD4                 x 187,486 ops/sec ±3.90% (133 runs sampled)
   buffer-base64-RSA-MD5                 x 198,017 ops/sec ±3.43% (122 runs sampled)
   buffer-base64-RSA-MDC2                x  54,660 ops/sec ±2.19% (126 runs sampled)
   buffer-base64-RSA-RIPEMD160           x 168,661 ops/sec ±2.98% (122 runs sampled)
   buffer-base64-RSA-SHA                 x 175,613 ops/sec ±2.91% (123 runs sampled)
   buffer-base64-RSA-SHA1                x 171,558 ops/sec ±3.77% (123 runs sampled)
   buffer-base64-RSA-SHA1-2              x 173,836 ops/sec ±3.30% (136 runs sampled)
   buffer-base64-RSA-SHA224              x 153,181 ops/sec ±3.27% (136 runs sampled)
   buffer-base64-RSA-SHA256              x 152,045 ops/sec ±4.36% (131 runs sampled)
   buffer-base64-RSA-SHA384              x 158,234 ops/sec ±3.13% (125 runs sampled)
   buffer-base64-RSA-SHA512              x 160,284 ops/sec ±2.93% (122 runs sampled)
   buffer-base64-dsaEncryption           x 187,789 ops/sec ±3.05% (123 runs sampled)
   buffer-base64-dsaWithSHA              x 186,305 ops/sec ±3.30% (119 runs sampled)
   buffer-base64-dsaWithSHA1             x 174,975 ops/sec ±3.57% (114 runs sampled)
   buffer-base64-dss1                    x 171,088 ops/sec ±3.86% (117 runs sampled)
   buffer-base64-ecdsa-with-SHA1         x 186,425 ops/sec ±3.47% (120 runs sampled)
   buffer-base64-md4                     x 197,159 ops/sec ±4.22% (121 runs sampled)
   buffer-base64-md4WithRSAEncryption    x 190,564 ops/sec ±3.53% (120 runs sampled)
   buffer-base64-md5                     x 192,341 ops/sec ±4.38% (118 runs sampled)
   buffer-base64-md5WithRSAEncryption    x 183,733 ops/sec ±3.81% (121 runs sampled)
   buffer-base64-mdc2                    x  52,974 ops/sec ±2.13% (127 runs sampled)
   buffer-base64-mdc2WithRSA             x  51,559 ops/sec ±2.58% (123 runs sampled)
   buffer-base64-ripemd                  x 161,710 ops/sec ±3.33% (128 runs sampled)
   buffer-base64-ripemd160               x 151,701 ops/sec ±4.05% (128 runs sampled)
   buffer-base64-ripemd160WithRSA        x 152,901 ops/sec ±3.01% (130 runs sampled)
   buffer-base64-rmd160                  x 156,443 ops/sec ±3.21% (135 runs sampled)
   buffer-base64-sha                     x 175,590 ops/sec ±3.42% (133 runs sampled)
   buffer-base64-sha1                    x 181,906 ops/sec ±3.58% (133 runs sampled)
   buffer-base64-sha1WithRSAEncryption   x 177,945 ops/sec ±3.45% (134 runs sampled)
   buffer-base64-sha224                  x 157,604 ops/sec ±3.30% (133 runs sampled)
   buffer-base64-sha224WithRSAEncryption x 149,909 ops/sec ±3.21% (135 runs sampled)
   buffer-base64-sha256                  x 150,559 ops/sec ±3.29% (132 runs sampled)
   buffer-base64-sha256WithRSAEncryption x 154,392 ops/sec ±2.98% (135 runs sampled)
   buffer-base64-sha384                  x 142,297 ops/sec ±3.44% (122 runs sampled)
   buffer-base64-sha384WithRSAEncryption x 151,261 ops/sec ±3.01% (124 runs sampled)
   buffer-base64-sha512                  x 160,888 ops/sec ±3.34% (119 runs sampled)
   buffer-base64-sha512WithRSAEncryption x 153,483 ops/sec ±3.29% (117 runs sampled)
   buffer-base64-shaWithRSAEncryption    x 170,315 ops/sec ±3.31% (120 runs sampled)
   buffer-base64-ssl2-md5                x 192,202 ops/sec ±3.29% (130 runs sampled)
   buffer-base64-ssl3-md5                x 184,604 ops/sec ±3.94% (122 runs sampled)
   buffer-base64-ssl3-sha1               x 180,457 ops/sec ±3.18% (122 runs sampled)
   buffer-base64-whirlpool               x 115,352 ops/sec ±2.76% (128 runs sampled)
Fastest is: buffer-base64-RSA-MD5, buffer-base64-md4

> node benchmark/body-1000.js
  1000 body

   buffer-base64-DSA                     x 114,402 ops/sec ±3.73% (125 runs sampled)
   buffer-base64-DSA-SHA                 x 117,086 ops/sec ±3.05% (134 runs sampled)
   buffer-base64-DSA-SHA1                x 113,933 ops/sec ±3.29% (131 runs sampled)
   buffer-base64-DSA-SHA1-old            x 118,144 ops/sec ±2.56% (132 runs sampled)
   buffer-base64-RSA-MD4                 x 139,261 ops/sec ±3.75% (128 runs sampled)
   buffer-base64-RSA-MD5                 x 121,723 ops/sec ±3.23% (134 runs sampled)
   buffer-base64-RSA-MDC2                x   7,110 ops/sec ±0.90% (140 runs sampled)
   buffer-base64-RSA-RIPEMD160           x  76,381 ops/sec ±2.08% (134 runs sampled)
   buffer-base64-RSA-SHA                 x  83,415 ops/sec ±3.03% (134 runs sampled)
   buffer-base64-RSA-SHA1                x 109,475 ops/sec ±3.45% (125 runs sampled)
   buffer-base64-RSA-SHA1-2              x 109,280 ops/sec ±4.14% (128 runs sampled)
   buffer-base64-RSA-SHA224              x  55,580 ops/sec ±2.58% (129 runs sampled)
   buffer-base64-RSA-SHA256              x  61,709 ops/sec ±2.44% (134 runs sampled)
   buffer-base64-RSA-SHA384              x  81,654 ops/sec ±2.14% (140 runs sampled)
   buffer-base64-RSA-SHA512              x  80,348 ops/sec ±2.51% (122 runs sampled)
   buffer-base64-dsaEncryption           x 112,095 ops/sec ±3.43% (129 runs sampled)
   buffer-base64-dsaWithSHA              x 111,060 ops/sec ±3.02% (112 runs sampled)
   buffer-base64-dsaWithSHA1             x 112,399 ops/sec ±3.39% (135 runs sampled)
   buffer-base64-dss1                    x 117,710 ops/sec ±2.77% (131 runs sampled)
   buffer-base64-ecdsa-with-SHA1         x 110,132 ops/sec ±2.79% (130 runs sampled)
   buffer-base64-md4                     x 131,226 ops/sec ±3.88% (124 runs sampled)
   buffer-base64-md4WithRSAEncryption    x 122,161 ops/sec ±4.23% (128 runs sampled)
   buffer-base64-md5                     x 124,919 ops/sec ±3.60% (134 runs sampled)
   buffer-base64-md5WithRSAEncryption    x 116,989 ops/sec ±3.37% (131 runs sampled)
   buffer-base64-mdc2                    x   7,101 ops/sec ±0.55% (144 runs sampled)
   buffer-base64-mdc2WithRSA             x   6,837 ops/sec ±1.55% (138 runs sampled)
   buffer-base64-ripemd                  x  76,987 ops/sec ±2.35% (133 runs sampled)
   buffer-base64-ripemd160               x  75,060 ops/sec ±2.32% (136 runs sampled)
   buffer-base64-ripemd160WithRSA        x  71,109 ops/sec ±2.33% (122 runs sampled)
   buffer-base64-rmd160                  x  74,044 ops/sec ±2.94% (135 runs sampled)
   buffer-base64-sha                     x  88,453 ops/sec ±2.51% (140 runs sampled)
   buffer-base64-sha1                    x 116,825 ops/sec ±3.59% (134 runs sampled)
   buffer-base64-sha1WithRSAEncryption   x 114,225 ops/sec ±3.41% (135 runs sampled)
   buffer-base64-sha224                  x  64,307 ops/sec ±2.58% (136 runs sampled)
   buffer-base64-sha224WithRSAEncryption x  63,903 ops/sec ±2.41% (138 runs sampled)
   buffer-base64-sha256                  x  66,849 ops/sec ±1.99% (138 runs sampled)
   buffer-base64-sha256WithRSAEncryption x  61,009 ops/sec ±2.47% (133 runs sampled)
   buffer-base64-sha384                  x  82,974 ops/sec ±2.29% (139 runs sampled)
   buffer-base64-sha384WithRSAEncryption x  83,461 ops/sec ±2.12% (134 runs sampled)
   buffer-base64-sha512                  x  79,637 ops/sec ±2.70% (132 runs sampled)
   buffer-base64-sha512WithRSAEncryption x  77,108 ops/sec ±2.80% (135 runs sampled)
   buffer-base64-shaWithRSAEncryption    x  85,105 ops/sec ±2.52% (128 runs sampled)
   buffer-base64-ssl2-md5                x 123,694 ops/sec ±3.07% (133 runs sampled)
   buffer-base64-ssl3-md5                x 129,556 ops/sec ±2.77% (125 runs sampled)
   buffer-base64-ssl3-sha1               x 127,501 ops/sec ±2.66% (135 runs sampled)
   buffer-base64-whirlpool               x  43,272 ops/sec ±1.83% (137 runs sampled)
Fastest is: buffer-base64-RSA-MD4

> node benchmark/body-10000.js
  10000 body

   buffer-base64-DSA                     x 31,691 ops/sec ±1.01% (142 runs sampled)
   buffer-base64-DSA-SHA                 x 31,353 ops/sec ±1.43% (131 runs sampled)
   buffer-base64-DSA-SHA1                x 31,028 ops/sec ±1.41% (140 runs sampled)
   buffer-base64-DSA-SHA1-old            x 30,242 ops/sec ±1.88% (132 runs sampled)
   buffer-base64-RSA-MD4                 x 43,880 ops/sec ±1.92% (138 runs sampled)
   buffer-base64-RSA-MD5                 x 34,123 ops/sec ±1.41% (142 runs sampled)
   buffer-base64-RSA-MDC2                x    734 ops/sec ±1.24% (139 runs sampled)
   buffer-base64-RSA-RIPEMD160           x 12,385 ops/sec ±0.76% (139 runs sampled)
   buffer-base64-RSA-SHA                 x 15,590 ops/sec ±0.89% (142 runs sampled)
   buffer-base64-RSA-SHA1                x 27,841 ops/sec ±2.11% (133 runs sampled)
   buffer-base64-RSA-SHA1-2              x 28,193 ops/sec ±2.35% (134 runs sampled)
   buffer-base64-RSA-SHA224              x  9,445 ops/sec ±1.26% (139 runs sampled)
   buffer-base64-RSA-SHA256              x  9,729 ops/sec ±0.93% (144 runs sampled)
   buffer-base64-RSA-SHA384              x 15,052 ops/sec ±0.53% (144 runs sampled)
   buffer-base64-RSA-SHA512              x 14,504 ops/sec ±1.17% (141 runs sampled)
   buffer-base64-dsaEncryption           x 29,790 ops/sec ±1.69% (136 runs sampled)
   buffer-base64-dsaWithSHA              x 28,647 ops/sec ±2.36% (137 runs sampled)
   buffer-base64-dsaWithSHA1             x 30,536 ops/sec ±1.76% (140 runs sampled)
   buffer-base64-dss1                    x 28,922 ops/sec ±2.04% (136 runs sampled)
   buffer-base64-ecdsa-with-SHA1         x 30,274 ops/sec ±1.74% (140 runs sampled)
   buffer-base64-md4                     x 44,817 ops/sec ±2.02% (141 runs sampled)
   buffer-base64-md4WithRSAEncryption    x 46,177 ops/sec ±1.70% (140 runs sampled)
   buffer-base64-md5                     x 34,311 ops/sec ±1.63% (140 runs sampled)
   buffer-base64-md5WithRSAEncryption    x 34,408 ops/sec ±1.87% (127 runs sampled)
   buffer-base64-mdc2                    x    726 ops/sec ±0.89% (137 runs sampled)
   buffer-base64-mdc2WithRSA             x    741 ops/sec ±0.88% (140 runs sampled)
   buffer-base64-ripemd                  x 12,924 ops/sec ±0.66% (141 runs sampled)
   buffer-base64-ripemd160               x 12,872 ops/sec ±0.67% (144 runs sampled)
   buffer-base64-ripemd160WithRSA        x 13,007 ops/sec ±0.68% (145 runs sampled)
   buffer-base64-rmd160                  x 13,146 ops/sec ±0.45% (141 runs sampled)
   buffer-base64-sha                     x 16,207 ops/sec ±0.71% (147 runs sampled)
   buffer-base64-sha1                    x 31,064 ops/sec ±1.73% (140 runs sampled)
   buffer-base64-sha1WithRSAEncryption   x 31,850 ops/sec ±1.22% (140 runs sampled)
   buffer-base64-sha224                  x 10,011 ops/sec ±1.01% (143 runs sampled)
   buffer-base64-sha224WithRSAEncryption x  9,914 ops/sec ±0.64% (143 runs sampled)
   buffer-base64-sha256                  x 10,181 ops/sec ±0.42% (144 runs sampled)
   buffer-base64-sha256WithRSAEncryption x 10,012 ops/sec ±0.86% (134 runs sampled)
   buffer-base64-sha384                  x 14,696 ops/sec ±1.35% (143 runs sampled)
   buffer-base64-sha384WithRSAEncryption x 14,562 ops/sec ±1.21% (137 runs sampled)
   buffer-base64-sha512                  x 14,874 ops/sec ±0.98% (137 runs sampled)
   buffer-base64-sha512WithRSAEncryption x 14,967 ops/sec ±0.83% (144 runs sampled)
   buffer-base64-shaWithRSAEncryption    x 15,476 ops/sec ±1.20% (142 runs sampled)
   buffer-base64-ssl2-md5                x 32,661 ops/sec ±1.25% (138 runs sampled)
   buffer-base64-ssl3-md5                x 34,868 ops/sec ±1.68% (143 runs sampled)
   buffer-base64-ssl3-sha1               x 30,487 ops/sec ±2.57% (121 runs sampled)
   buffer-base64-whirlpool               x  5,956 ops/sec ±0.94% (141 runs sampled)
Fastest is: buffer-base64-md4WithRSAEncryption
```