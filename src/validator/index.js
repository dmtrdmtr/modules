import buildSchema from './buildSchema';
import checkValidity from './validateModel';

export const validate = rules => {
    const schema = buildSchema(rules);
    const callValidate = model => checkValidity(model)(model, schema, []);

    callValidate.schema = schema;

    return callValidate;
};
