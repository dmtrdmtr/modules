var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import Login from './components/Login';
import SetPassword from './components/SetPassword';
import DateInput from './form/DateInput';
import Input from './form/Input';
import NumberInput from './form/NumberInput';
import Radio from './form/Radio';
import Select from './form/Select';
import Textarea from './form/Textarea';

import modules from './reducers/root';
import sagas from './sagas';

import * as actions from './constants/actions';

import * as reduxUtils from './utils/redux';

var api = _extends({
    components: {
        Login: Login,
        SetPassword: SetPassword,
        DateInput: DateInput,
        Input: Input,
        NumberInput: NumberInput,
        Radio: Radio,
        Select: Select,
        Textarea: Textarea
    }
}, actions, {
    utils: reduxUtils,
    getReducers: function getReducers() {
        return { modules: modules };
    },
    getSagas: function getSagas() {
        return sagas;
    }
});

export default api;