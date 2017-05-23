import axios from 'axios';
import React from 'react';
import { reduxForm, Field, propTypes as formPropTypes } from 'redux-form';
import { Select, Radio, Load } from 'experium-modules';

import 'react-widgets/dist/css/react-widgets.css';

const SelectWithDict = Load(Select);

axios.defaults.baseURL = '/SupportSrv/SupportSrv.svc/Support/v2';
const url = '/hrnet/';
const getDictionaryUrl = (props) => {
    return url + props.loadName;
};

const FormWithDictLoad = () => (
    <form noValidate>
        <label>
            Radio
            <Field name='Radio'
                    component={Radio}
                    options={[{id: 1, name: 'Test 1'}]}/>
        </label>
        <label>
            Select
            <Field name='Select'
                    component={SelectWithDict}
                    getLoadUrl={getDictionaryUrl}
                    loadName='town' />
        </label>
    </form>
);

FormWithDictLoad.propTypes = formPropTypes;

export const Components = reduxForm({
    form: 'dicts'
})(FormWithDictLoad);
