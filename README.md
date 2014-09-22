# nodejs-hash-performance

Benchmarks for node `crypto.getHashes()`

[Travis Benchmark](https://travis-ci.org/hex7c0/nodejs-hash-performance/)

## Installation

Install through NPM

```bash
npm install node-hash-performance
```
or
```bash
git clone git://github.com/hex7c0/node-hash-performance.git
```

## API

inside nodejs project
```js
var hash = require('node-hash-performance');

hash('ciao', 'md5', 'base64');
```

### node-hash-performance(raw,hash,encoding)

#### options

 - `raw` - **String | Buffer** Your Data *(default "required")*
 - `hash`- **String** Type of Hash *(default "required")*
 - `encoding`- **String** Type of Encoding *(default "required")*

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
