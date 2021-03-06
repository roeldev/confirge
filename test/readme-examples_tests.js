/**
 * confirge | test/readme-examples_tests.js
 *
 * Test for provided examples in the read me file. It would be pretty
 * embarrassing of those would not work like illustrated :P
 */
'use strict';

var Assert   = require('assert');
var Confirge = require('../lib/index.js');

// -----------------------------------------------------------------------------

describe('readme examples', function readmeExamples()
{
    it('example `How to use`', function()
    {
        // extend objects
        var $config = Confirge.extend({}, {
            'example': '%var1% and %var2%'
        });

        // will replace vars inside the config obj, eg. %var1%, %var2%
        // this will result in { 'example': 'value1 and value2' }
        $config = Confirge.replace($config, {
            'var1': 'value1',
            'var2': 'value2'
        });

        Assert.deepEqual($config, { 'example': 'value1 and value2' });
    });

    it('example `confirge.replace API`', function()
    {
        var $source = {
            'config-option':   '%some-var%',
            'config-option2':  '%another.var%',
            'other-option':    true,
            'supported-types': ['object', '%types.a%']
        };

        var $vars = {
            'some-var':    'some-value',    // %some-var%
            'another.var': 'another value', // %another.var%
            'types':       { 'a': 'array' } // %types.a%
        };

        Assert.deepEqual(Confirge.replace($source, $vars), {
            'config-option':   'some-value',
            'config-option2':  'another value',
            'other-option':    true,
            'supported-types': ['object', 'array']
        });
    });
});
