#!/usr/bin/env node

const request = require('request');
const path = require('path');
const fs = require('fs');
const argv = require('argv');

const argvParser = argv.option([
    {
        name: 'script-folder-path',
        short: 'f',
        type: 'path',
        example: "'publish-rollbar --script-folder-path=build/static/js' or 'publish-rollbar -f build/static/js'"
    },
    {
        name: 'public-path',
        short: 'p',
        type: 'string',
        example: "'publish-rollbar --public-path=http://domain.net/static/js' or 'publish-rollbar -p http://domain.net/static/js'"
    },
    {
        name: 'version',
        short: 'v',
        type: 'int',
        example: "'publish-rollbar --version-path=$BUILD_NUMBER' or 'publish-rollbar -f $BUILD_NUMBER'"
    },
    {
        name: 'token',
        short: 't',
        type: 'string',
        example: "'publish-rollbar --token=$ROLLBAR_POST_SERVER_TOKEN' or 'publish-rollbar -t $ROLLBAR_POST_SERVER_TOKEN'"
    }
]);

const {
    'script-folder-path': scriptPath,
    'public-path': publicPath,
    version,
    token
} = argvParser.run().options;

const cwd = process.cwd();

const exitIfError = (err) => err && process.exit(1);

fs.readdir(path.resolve(cwd, scriptPath), (err, [ js, map ]) => {
    exitIfError(err);

    request.post({
        url: 'https://api.rollbar.com/api/1/sourcemap',
        formData: {
            'version': version,
            'access_token': token,
            'minified_url': publicPath.replace(/\/$/, '') + '/' + js,
            'source_map': fs.createReadStream(path.resolve(cwd, scriptPath, map))
        }
    }, exitIfError);
});