import { createMetaReducer, createMetaActionTypes } from '../src/createMetaReducer';
import { toReset, toRequest, toSuccess, toError } from '../src/actionHelpers';

const GET_ITEM = 'GET_ITEM';
const POST_ITEM = 'POST_ITEM';
const PUT_ITEM = 'PUT_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const reducer = createMetaReducer({
    get: GET_ITEM,
    post: POST_ITEM,
    put: PUT_ITEM,
    delete: DELETE_ITEM
});

describe('createMetaActionTypes', () => {
    it('should return actions', () => {
        const action = 'ANOTHER_ACTION';
        const metaActions = [
            toRequest(action),
            toSuccess(action),
            toError(action),
            toReset(action)
        ];

        expect(createMetaActionTypes(action)).toEqual(metaActions);
    });
});

describe('createMetaReducer', () => {
    it('should return the initial state', () => {
        const initialState = { get: {}, post: {}, put: {}, delete: {} };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should return the state', () => {
        const state = {
            get: { pending: false, success: true, error: false },
            post: { pending: false, success: false, error: { code: 3 } },
            put: {},
            delete: {}
        };

        expect(reducer(state, {
            type: 'ANOTHER_ACTION',
            payload: { id: 4 }
        })).toEqual(state);
    });

    it('should handle GET_ITEM_REQUEST', () => {
        const current = {
            get: {},
            post: {},
            put: { pending: false, success: true, error: false },
            delete: {}
        };
        const updated = {
            get: { pending: true, success: false, error: false },
            post: {},
            put: { pending: false, success: true, error: false },
            delete: {}
        };

        expect(reducer(current, {
            type: toRequest(GET_ITEM),
            payload: {}
        })).toEqual(updated);
    });

    it('should handle GET_ITEM_SUCCESS', () => {
        const current = {
            get: { pending: true, success: false, error: false },
            post: { pending: false, success: true, error: false },
            put: {},
            delete: {}
        };
        const updated = {
            get: { pending: false, success: true, error: false },
            post: { pending: false, success: true, error: false },
            put: {},
            delete: {}
        };

        expect(reducer(current, {
            type: toSuccess(GET_ITEM),
            payload: {}
        })).toEqual(updated);
    });

    it('should handle GET_ITEM_ERROR', () => {
        const current = {
            get: { pending: true, success: false, error: false },
            post: {},
            put: {},
            delete: { pending: false, success: false, error: { code: 3 } }
        };
        const updated = {
            get: { pending: false, success: false, error: { code: 5 } },
            post: {},
            put: {},
            delete: { pending: false, success: false, error: { code: 3 } }
        };

        expect(reducer(current, {
            type: toError(GET_ITEM),
            payload: { code: 5 }
        })).toEqual(updated);
    });

    it('should handle GET_ITEM_RESET', () => {
        const current = { get: { pending: false, success: true, error: false }, post: {}, put: {}, delete: {} };
        const updated = { get: { pending: false, success: false, error: false }, post: {}, put: {}, delete: {} };

        expect(reducer(current, {
            type: toReset(GET_ITEM),
            payload: {}
        })).toEqual(updated);
    });
})
