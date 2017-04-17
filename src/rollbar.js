import * as Rollbar from 'rollbar-browser';
import {merge, map, replace, always, evolve, compose, join} from 'ramda';

const defaults = {
    getPayload: always(null),
    domains: ['.*?']
};

const loseSlash = replace(/\/$/, '');
const getDomains = compose(join('|'), map(loseSlash));

export default function (options) {
    options = merge(defaults, options);

    const domainRegexp = new RegExp(`https?://(${getDomains(options.domains)})/`);

    const changeDomain = evolve({
        filename: replace(domainRegexp, loseSlash(options.sourceHost) + '/')
    });

    window._rollbarConfig = {
        accessToken: options.token,
        captureUncaught: true,
        transform: (payload) => {
            const state = options.getPayload();
            payload.data.body.state = JSON.stringify(state, null, 2);

            const { trace } = payload.data.body;
            if (trace && trace.frames) {
                trace.frames = map(changeDomain, trace.frames);
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
}
