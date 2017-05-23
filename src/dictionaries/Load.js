import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pathOr from 'ramda/src/pathOr';

import { exceptComponentsProps } from '../utils/ramdaAdditions';
import { getDictionary } from '../actions';

export const Load = (ComposedComponent) => {
    class LoadDictionary extends Component {
        static propTypes = {
            getLoadUrl: PropTypes.func.isRequired,
            loadName: PropTypes.string,
        };

        componentDidMount() {
            const { getDictionary, getLoadUrl } = this.props;

            getDictionary(null, { url: getLoadUrl(this.props) });
        }

        render() {
            const props = exceptComponentsProps(LoadDictionary, this.props);

            return <ComposedComponent {...props} />
        }
    }

    const stateToProps = (state, props) => {
        const url = props.getLoadUrl(props);

        return {
            url,
            options: pathOr([], ['dictionaries', url], state.modules)
        }
    };

    const dispatchToProps = { getDictionary };

    return connect(stateToProps, dispatchToProps)(LoadDictionary);
};
