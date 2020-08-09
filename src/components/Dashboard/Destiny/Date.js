import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { tripCreator } from '../../../Redux/actions/actions';

import 'react-datepicker/dist/react-datepicker.css';

class Dating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const { startDate } = this.state;
    const { dispatch } = this.props;
    dispatch(tripCreator(startDate));

    return (
      <DatePicker
        selected={startDate}
        onChange={this.handleChange}
      />
    );
  }
}

Dating.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Dating;
