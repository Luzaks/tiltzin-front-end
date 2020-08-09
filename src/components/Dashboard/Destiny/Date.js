import React from 'react';
import DatePicker from 'react-datepicker';

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
    return (
      <DatePicker
        selected={startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Dating;
