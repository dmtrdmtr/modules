import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { reduxForm, Field } from 'redux-form';

import configureStore from '../test-utils/configureStore';
import { GET_DICTIONARY } from '../../src/actionTypes';
import { toSuccess, toError } from '../../src/actionHelpers';
import { Select } from '../../src/form/Select';
import { Radio } from '../../src/form/Radio';
import { Load } from '../../src/dictionaries/Load';

const url = '/dicts/';
const dict1 = 'dict1';
const dict2 = 'dict2';
const data = {
    [dict1]: [{id: 1, name: '1'}, {id: 2, name: '2'}],
    [dict2]: [{id: 1, name: '-'}, {id: 2, name: '--'}, {id: 2, name: '---'}]
};
const testGetUrl = (props) => url + props.loadName;

const FieldWithDict = Load(Field);
const Form = reduxForm({form: 'dict_test_form'})(() => {
    return (
        <form noValidate>
            <FieldWithDict component={ Select }
                           name='test_dict_1'
                           getLoadUrl={testGetUrl}
                           loadName={dict1} />
            <FieldWithDict component={ Radio }
                           name='test_dict_2'
                           getLoadUrl={testGetUrl}
                           loadName={dict2} />
        </form>
    );
});

const getStateName = (dict) => testGetUrl({loadName: dict });
const mockDictsAction = (store, actionType, data, type) => {
    const action = {
        type: actionType(GET_DICTIONARY),
        payload: data,
        requestAction: {
            type: GET_DICTIONARY,
            attrs: {
                url: url + type
            }
        }
    };
    store.dispatch(action);
};

const setup = (props = {}) => {
    const store = configureStore({});
    const wrapper = mount(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    return {
        props: { ...props  },
        wrapper,
        store
    };
};

describe('Load Container', () => {
    it('should load and store dictionaries', () => {
        const { wrapper, store } = setup();
        const radio = wrapper.find(Radio);
        const select = wrapper.find(Select);
        const getData = () =>
            store.getState().modules.dictionaries;

        mockDictsAction(store, toSuccess, data[dict1], dict1);
        mockDictsAction(store, toSuccess, data[dict2], dict2);
        const stateData = getData();

        expect(select.props().options).toEqual(data[dict1]);
        expect(radio.props().options).toEqual(data[dict2]);
        expect(stateData[getStateName(dict1)]).toEqual(data[dict1]);
        expect(stateData[getStateName(dict2)]).toEqual(data[dict2]);
    });

    it('should store meta', () => {
        const { store } = setup();
        const getMeta = () =>
            store.getState().modules.meta.dictionaries;

        mockDictsAction(store, toSuccess, data[dict1], dict1);
        mockDictsAction(store, toSuccess, data[dict2], dict2);

        const metaAfterSuccess = getMeta();
        expect(metaAfterSuccess[getStateName(dict1)].get).not.toEqual({});
        expect(metaAfterSuccess[getStateName(dict2)].get).not.toEqual({});
    });

    it('should render dict', () => {
        const { wrapper, store } = setup();
        const radio = wrapper.find(Radio);
        const select = wrapper.find(Select);

        mockDictsAction(store, toSuccess, data[dict1], dict1);
        mockDictsAction(store, toSuccess, data[dict2], dict2);

        select.find('.rw-input').simulate('click');
        expect(select.find('li').length).toEqual(2);
        expect(radio.find('input').length).toEqual(3);
    });

    it('should handle error', () => {
        const { wrapper, store } = setup();
        const radio = wrapper.find(Radio);
        const select = wrapper.find(Select);
        const getState = () =>
            store.getState().modules.meta.dictionaries;

        mockDictsAction(store, toError, {}, dict1);
        mockDictsAction(store, toError, {}, dict2);
        const errorMeta = getState();
        expect(errorMeta[getStateName(dict1)].get.error).toEqual({});
        expect(errorMeta[getStateName(dict2)].get.error).toEqual({});
        expect(select.props().options).toEqual([]);
        expect(radio.props().options).toEqual([]);
    });
});
