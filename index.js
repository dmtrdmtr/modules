import Login from './src/components/Login';
import DateInput from './src/form/DateInput';
import Input from './src/form/Input';
import NumberInput from './src/form/NumberInput';
import Radio from './src/form/Radio';
import Select from './src/form/Select';
import Textarea from './src/form/Textarea';

import modules from './src/reducers/root';
import sagas from './src/sagas';

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