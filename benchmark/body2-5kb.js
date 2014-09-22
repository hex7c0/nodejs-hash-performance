/**
 * Module dependencies.
 */

var benchmark = require('benchmark')
var benchmarks = require('beautify-benchmark')
var seedrandom = require('seedrandom')

/**
 * Globals for benchmark.js
 */

global.buffer = getbuffer(5 * 1000)
global.hash = require('..')
global.string = getbuffer(5 * 1000).toString()

var suite = new benchmark.Suite

var hashes = require('crypto').getHashes();
for (var i = 0, ii = hashes.length; i < ii; i++) {
    suite.add({
        name: 'string - ' + hashes[i],
        minSamples: 50,
        fn: 'var val = hash(string, "' + hashes[i] + '")'
    });
    suite.add({
        name: 'buffer - ' + hashes[i],
        minSamples: 50,
        fn: 'var val = hash(buffer, "' + hashes[i] + '")'
    });

}

suite.on('start', function onCycle(event) {

    process.stdout.write('  5KB body\n\n')
})

suite.on('cycle', function onCycle(event) {

    benchmarks.add(event.target);
})

suite.on('complete', function onComplete() {

    benchmarks.log();
    console.log('Fastest is: ' + this.filter('fastest').pluck('name') + '\n');
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
