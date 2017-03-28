import Login from './lib/components/Login';
import DateInput from './lib/form/DateInput';
import Input from './lib/form/Input';
import NumberInput from './lib/form/NumberInput';
import Radio from './lib/form/Radio';
import Select from './lib/form/Select';
import Textarea from './lib/form/Textarea';

import modules from './lib/reducers/root';
import sagas from './lib/sagas';

export default {
    components: {
        Login,
        DateInput,
        Input,
        NumberInput,
        Radio,
        Select,
        Textarea
    },
    getReducers: () => ({modules}),
    getSagas: () => sagas
}