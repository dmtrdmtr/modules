'use strict';

exports.__esModule = true;

exports.default = function (options) {
    options = (0, _ramda.merge)(defaults, options);

    var domainRegexp = new RegExp('https?://(' + getDomains(options.domains) + ')/');

    var changeDomain = (0, _ramda.evolve)({
        filename: (0, _ramda.replace)(domainRegexp, loseSlash(options.sourceHost) + '/')
    });

    window._rollbarConfig = {
        accessToken: options.token,
        captureUncaught: true,
        transform: function transform(payload) {
            var state = options.getPayload();
            payload.data.body.state = JSON.stringify(state, null, 2);

            var trace = payload.data.body.trace;

            if (trace && trace.frames) {
                trace.frames = (0, _ramda.map)(changeDomain, trace.frames);
            }
        },
        payload: {
            environment: location.host,
            client: {
                javascript: {
                    source_map_enabled: true,
                    code_version: options.version,
                    guest_uncaught_frames: true
                }
            }
        }
    };

    Rollbar.init(window._rollbarConfig);
};

var _rollbarBrowser = require('rollbar-browser');

var Rollbar = _interopRequireWildcard(_rollbarBrowser);

var _ramda = require('ramda');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaults = {
    getPayload: (0, _ramda.always)(null),
    domains: ['.*?']
};

var loseSlash = (0, _ramda.replace)(/\/$/, '');
var getDomains = (0, _ramda.compose)((0, _ramda.join)('|'), (0, _ramda.map)(loseSlash));