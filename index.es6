import Login from './lib/components/Login';
import SetPassword from './lib/components/SetPassword';
import DateInput from './lib/form/DateInput';
import Input from './lib/form/Input';
import NumberInput from './lib/form/NumberInput';
import Radio from './lib/form/Radio';
import Select from './lib/form/Select';
import Textarea from './lib/form/Textarea';

import modules from './lib/reducers/root';
import sagas from './lib/sagas';

import * as actions from './lib/constants/actions';

import * as reduxUtils from './lib/utils/redux'

const api = {
    components: {
        Login,
        SetPassword,
        DateInput,
        Input,
        NumberInput,
        Radio,
        Select,
        Textarea
    },
    ...actions,
    utils: reduxUtils,
    getReducers: () => ({modules}),
    getSagas: () => sagas
};

export default api;