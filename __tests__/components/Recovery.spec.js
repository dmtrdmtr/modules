import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';

import configureStore from '../test-utils/configureStore';
import { Recovery } from '../../src/components/Recovery';

const setup = (props = {}) => {
    const store = configureStore({});
    const wrapper = mount(
        <Provider store={store}>
            <Recovery {...props}>
                <input name='email' type='email' />
                <button type='submit'>Отправить</button>
            </Recovery>
        </Provider>
    );

    return {
        props: { ...props },
        wrapper,
        store
    };
};

const url = '/some';

describe('Recovery Container', () => {
    it('should render', () => {
        const { wrapper } = setup({ url });
        const Container = wrapper.find(Recovery);

        expect(Container.length).toEqual(1);
        expect(Container.find('input').length).toEqual(1);
        expect(Container.find('button').length).toEqual(1);
    });

    it('should submit', () => {
        const handleSubmit = jest.fn();

        const { wrapper } = setup({ handleSubmit, url });
        const Container = wrapper.find(Recovery);

        Container.simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });

    it('should clear meta', () => {
        const { wrapper, store } = setup({ url });
        const Container = wrapper.find(Recovery);

        const getRecoveryMeta = () =>
            store.getState().modules.meta.recovery;

        Container.simulate('submit');
        const metaAfterSubmit = getRecoveryMeta();
        expect(metaAfterSubmit).not.toEqual({});

        wrapper.unmount();
        const metaAfterUnmount = getRecoveryMeta();
        expect(metaAfterUnmount).toEqual({});
    });
});
