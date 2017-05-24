import contains from 'ramda/src/contains';

export function createListReducer(take, storeBy, reducer) {
    return function(state = {}, action) {
        if (contains(action.type, take)) {
            const key = storeBy(action);
            const { [key]: stored = null } = state;
            return { ...state, [key]: reducer(stored, action) };
        }

        return state;
    }
}
