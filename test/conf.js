/*global exports, require */

(function () {
    exports.config = {
        framework: 'jasmine',
        seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: ['spec.js'],
        capabilities: {
            'browserName': 'phantomjs',
            'phantomjs.binary.path': require('phantomjs').path,
            'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
        }
    };
}());