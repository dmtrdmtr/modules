import { Component } from 'react';
import { WrappedFieldProps, Config } from 'redux-form';
import { DateTimePicker, SelectList } from 'react-widgets';
import { MaskedInputProps } from 'react-maskedinput';
import { Reducer } from 'redux';
import { Effect, Pattern, SagaIterator } from 'redux-saga';
import { AxiosPromise } from 'axios';
import { Pred } from 'ramda';

type N = null;

interface IDateInputProps {
    placeholder?: string,
    viewFormat?: string
}

interface IDateInputState {
    isOpened: boolean
}

export class DateInput extends Component<WrappedFieldProps<any> & DateTimePicker & IDateInputProps, IDateInputState> {}

interface IInputProps {
    type?: string,
    placeholder?: string
}

export class Input extends Component<WrappedFieldProps<any> & IInputProps, {}> {}


interface IMaskInputProps {
    type?: string,
    placeholder?: string
}

export class MaskInput extends Component<WrappedFieldProps<any> & MaskedInputProps & IMaskInputProps, {}> {}

interface INumberInputProps {
    placeholder?: string
}

export class NumberInput extends Component<WrappedFieldProps<any> & INumberInputProps, {}> {}

interface IRadioProps {
    options: any[],
    valueField?: string,
    textField?: string
}

export class Radio extends Component<WrappedFieldProps<any> & IRadioProps, {}> {}

export class Select extends Component<WrappedFieldProps<any> & SelectList, {}> {}

interface ITextareaProps {
    placeholder?: string
}

export class Textarea extends Component<WrappedFieldProps<any> & ITextareaProps, {}> {}

interface IReducers {
    modules(reducers: any): Reducer<{}>
}

export function getReducers(): IReducers;

export function getSagas(): Effect[];

export const PREFIX: string;
export const GET_DICTIONARY: string;
export const LOGIN: string;
export const SEND_RECOVERY_EMAIL: string;
export const PASSWORD_CONFIRM: string;

interface IAction<P, A, SP> {
    type: string,
    payload: SP | P,
    attrs: A
}

type Action = IAction<any, any, any>;
type ActionCreator<SP> = <P, A>(payload?: P, attrs?: A) => IAction<P, A, SP>;

interface IActionCreator<SP> {
    <P, A>(payload?: P, attrs?: A): IAction<P, A, SP>,
    error: ActionCreator<SP>,
    request: ActionCreator<SP>,
    success: ActionCreator<SP>,
    reset: ActionCreator<SP>,
}

export const createAction: <SP>(type: string, staticPayload?: SP) => IActionCreator<SP>;

type StringFnHelper = (str: string) => string;

export const toError: StringFnHelper;
export const toRequest: StringFnHelper;
export const toSuccess: StringFnHelper;
export const toReset: StringFnHelper;

export const login: ActionCreator<N>;
export const sendRecoveryEmail: ActionCreator<N>;
export const passwordConfirm: ActionCreator<N>;

interface IMetaActionsDescription {
    get?: string,
    post?: string,
    put?: string,
    delete?: string
}

interface IMeta {
    pending: boolean,
    error: any,
    success: boolean
}

interface IMetaReducer {
    get: IMeta,
    post: IMeta,
    put: IMeta,
    delete: IMeta
}

export function createListReducer(take: string[], storeBy: <A>(action: A) => string, reducer: <S>(state: S, action: Action) => S):
    <S>(state: S, action: Action) => S;
export function createMetaReducer(actions: IMetaActionsDescription):
    <S>(state: S, action: Action) => S & IMetaReducer;
export function createMetaActionTypes(actionType: string): string[];

export const EMAIL: string;

interface INoHandler<A extends Action> {
    reason: string,
    action: A
}

type Handler = (action: Action) => AxiosPromise;
type GeneratorHandler = (action: Action) => IterableIterator<{response?: any, error?: any}>
type Reject<A extends Action> = (action: A) => Promise<INoHandler<A>>;

export const doAction: <A extends Action>(action: A) => () => AxiosPromise | Reject<A>;

export const setGeneratorActionHandler: (type: string, handler: GeneratorHandler) => void;
export const setActionHandler: (type: string, handler: Handler) => void;

type Validator = [Pred<{}>, (v: {}) => {}];

export const required: Validator;
export const email: Validator;
export const password: Validator;

export const validate: (rules: any) => (values: any) => any;

export function requestGenerator(actionFn: ActionCreator<N>, action: Action): IterableIterator<{response?: any, error?: any}>;
export function takeFirst<A extends Action>(pattern: any, storeBy: () => string, worker: any, ...rest: any[]): SagaIterator;

interface IComponent {
    url: string
}

export const Load: <C>(component: C) => C;

export class Login extends Component<IComponent & Config<any, any, any>, {}> {}

export class Recovery extends Component<IComponent & Config<any, any, any>, {}> {}

export class PasswordConfirm extends Component<IComponent & Config<any, any, any>, {}> {}
