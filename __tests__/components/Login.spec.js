import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import { Field } from 'redux-form';

import configureStore from '../test-utils/configureStore';
import { Login } from '../../src/components/Login';
import { toError } from '../../src/actionHelpers';
import { LOGIN } from '../../src/actionTypes';

const setup = (props = {}) => {
    const store = configureStore({});
    const wrapper = mount(
        <Provider store={store}>
            <Login {...props}>
                <Field component="input" type="text" name="email" />
                <Field component="input" type="password" name="password" />
                <button type='submit'>Отправить</button>
            </Login>
        </Provider>
    );

    return {
        props: { ...props  },
        wrapper,
        store
    };
};

const mockLoginErrorActionDispatching = (store, code) => {
    const action = {
        type: toError(LOGIN),
        payload: {
            data: { code }
        }
    };
    store.dispatch(action);
};

const url = '/some';

describe('Login Container', () => {
    it('should render', () => {
        const { wrapper } = setup({ url });
        const Container = wrapper.find(Login);

        expect(Container.length).toEqual(1);
        expect(Container.find('Field').length).toEqual(2);
        expect(Container.find('button').length).toEqual(1);
    });

    it('should submit', () => {
        const handleSubmit = jest.fn();

        const { wrapper } = setup({ handleSubmit, url });
        const Container = wrapper.find(Login);

        Container.simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });

    it('should clear meta', () => {
        const { wrapper, store } = setup({ url });
        const Container = wrapper.find(Login);

        const getLoginMeta = () =>
            store.getState().modules.meta.login;

        Container.simulate('submit');
        const metaAfterSubmit = getLoginMeta();
        expect(metaAfterSubmit).not.toEqual({});

        wrapper.unmount();
        const metaAfterUnmount = getLoginMeta();
        expect(metaAfterUnmount).toEqual({});
    });

    it('render captcha', () => {
        const { wrapper, store } = setup({ url });
        const Container = wrapper.find(Login);

        const code = "fasdft4i290jk8KKf9awkjr";
        mockLoginErrorActionDispatching(store, code);

        expect(Container.find({ name: 'code' }).length).toEqual(1);
        const CaptchaImg = Container.find('img');
        expect(CaptchaImg.length).toEqual(1);
        expect(CaptchaImg.props().src).toEqual(`data:image/png;base64,${code}`);
    });

    it('clear code field when captcha changes', () => {
        const { wrapper, store } = setup({ url, captcha: '123123' });
        const Container = wrapper.find(Login);

        const code = "fasdft4i290jk8KKf9awkjr";
        mockLoginErrorActionDispatching(store, code);

        const CodeField = Container.find({ name: 'code' });
        expect(CodeField.props().value).toEqual('');
    });
});
