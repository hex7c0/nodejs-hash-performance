/**
 * Module dependencies.
 */

var benchmark = require('benchmark')
var benchmarks = require('beautify-benchmark')
var seedrandom = require('seedrandom')

/**
 * Globals for benchmark.js
 */

global.buffer = getbuffer(10000)
global.hash = require('..')
global.string = getbuffer(10000).toString()

var suite = new benchmark.Suite

var encoding = [ 'hex', 'binary', 'base64' ];
var hashes = require('crypto').getHashes();
for (var i = 0, ii = hashes.length; i < ii; i++) {
    for (var j = 0, jj = encoding.length; j < jj; j++) {
        suite.add({
            name: ' string-' + encoding[j] + '-' + hashes[i],
            minSamples: 50,
            fn: 'var val = hash(string, "' + hashes[i] + '", "' + encoding[j]
                    + '")'
        });
        suite.add({
            name: ' buffer-' + encoding[j] + '-' + hashes[i],
            minSamples: 50,
            fn: 'var val = hash(string, "' + hashes[i] + '", "' + encoding[j]
                    + '")'
        });
    }
}

suite.on('start', function onCycle(event) {

    process.stdout.write('  10000 body\n\n')
})

suite.on('cycle', function onCycle(event) {

    benchmarks.add(event.target);
})

suite.on('complete', function onComplete() {

    benchmarks.log();
    console.log('Fastest is:' + this.filter('fastest').pluck('name') + '\n');
})

suite.run({
    async: false
})

function getbuffer(size) {

    var buffer = new Buffer(size)
    var rng = seedrandom('body ' + size)

    for (var i = 0; i < buffer.length; i++) {
        buffer[i] = (rng() * 94 + 32) | 0
    }

    return buffer
}
