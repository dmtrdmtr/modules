export function createListReducer(take, storeBy, reducer) {
    return function(state = {}, action) {
        if (take.includes(action.type)) {
            const key = storeBy(action);
            const { [key]: stored = null } = state;
            return { ...state, [key]: reducer(stored, action) };
        }

        return state;
    }
}
