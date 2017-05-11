import R from 'ramda';
import validate from 'redux-validate';
import { required, email, password } from '../../src/utils/validators';

describe('validators', () => {
    it('required validator', () => {
        const validator = validate({
            password: R.cond([required])
        });

        const valuesWithoutPassword = {
            email: 'aaaa@aa.ru'
        };
        const valuesWithEmptyPassword = {
            email: 'aaaa@aa.ru',
            password: ''
        };
        const valuesWithPassword = {
            email: 'aaaa@aa.ru',
            password: 'asdfasf'
        };

        expect(validator(valuesWithoutPassword)).toEqual({ password: 'Это поле обязательно для заполнения' });
        expect(validator(valuesWithEmptyPassword)).toEqual({ password: 'Это поле обязательно для заполнения' });
        expect(validator(valuesWithPassword)).toEqual({});
    });

    it('email validator', () => {
        const validator = validate({
            email: R.cond([email])
        });

        const emptyEmail = { email: '' };
        const emailWithoutDomainAndAt = { email: 'alibaba' };
        const emailWithoutDomain = { email: 'alibaba@' };
        const emailWithoutUserName = { email: '@ya.ru' };
        const emailWithoutFirstDomain = { email: 'alibaba@ya.' };
        const validEmail = { email: 'alibaba@ya.ru' };

        expect(validator(emptyEmail)).toEqual({ email: 'Вы ввели невалидный e-mail адрес' });
        expect(validator(emailWithoutDomainAndAt)).toEqual({ email: 'Вы ввели невалидный e-mail адрес' });
        expect(validator(emailWithoutDomain)).toEqual({ email: 'Вы ввели невалидный e-mail адрес' });
        expect(validator(emailWithoutUserName)).toEqual({ email: 'Вы ввели невалидный e-mail адрес' });
        expect(validator(emailWithoutFirstDomain)).toEqual({ email: 'Вы ввели невалидный e-mail адрес' });
        expect(validator(validEmail)).toEqual({});
    });

    it('password validator', () => {
        const validator = validate({
            password: R.cond([password])
        });

        const emptyPassword = { password: '' };
        const tooShortPassword = { password: 'qwert' };
        const tooLongPassword = { password: 'qwertyqwerty123456' };
        const validPassword = { password: 'qwerty1234' };

        expect(validator(emptyPassword)).toEqual({ password: 'Пароль должен содержать от 6 до 15 символов' });
        expect(validator(tooShortPassword)).toEqual({ password: 'Пароль должен содержать от 6 до 15 символов' });
        expect(validator(tooLongPassword)).toEqual({ password: 'Пароль должен содержать от 6 до 15 символов' });
        expect(validator(validPassword)).toEqual({});
    });
});
