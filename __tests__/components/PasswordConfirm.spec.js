import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';

import configureStore from '../test-utils/configureStore';
import { PasswordConfirm } from '../../src/components/PasswordConfirm';

const setup = (props = {}) => {
    const store = configureStore({});
    const wrapper = mount(
        <Provider store={store}>
            <PasswordConfirm {...props}>
                <input name='password' type='password' defaultValue="234"/>
                <input name='passwordConfirm' type='password' defaultValue="255"/>
                <button type='submit'>Отправить</button>
            </PasswordConfirm>
        </Provider>
    );

    return {
        props: { ...props },
        wrapper,
        store
    };
};

describe('PasswordConfirm Container', () => {
    it('should render', () => {
        const url = '/some';

        const { wrapper } = setup({ url });
        const Container = wrapper.find(PasswordConfirm);

        expect(Container.length).toEqual(1);
        expect(Container.find('input').length).toEqual(2);
        expect(Container.find('button').length).toEqual(1);
    });

    it('should submit', () => {
        const url = '/some';
        const handleSubmit = jest.fn();

        const { wrapper } = setup({ handleSubmit, url });
        const Container = wrapper.find(PasswordConfirm);

        Container.simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });

    it('should clear meta', () => {
        const url = '/some';
        const { wrapper, store } = setup({ url });
        const Container = wrapper.find(PasswordConfirm);

        const getPasswordConfirmMeta = () =>
            store.getState().modules.meta.passwordConfirm;

        Container.simulate('submit');
        const metaAfterSubmit = getPasswordConfirmMeta();
        expect(metaAfterSubmit).not.toEqual({});

        wrapper.unmount();
        const metaAfterUnmount = getPasswordConfirmMeta();
        expect(metaAfterUnmount).toEqual({});
    });
});
