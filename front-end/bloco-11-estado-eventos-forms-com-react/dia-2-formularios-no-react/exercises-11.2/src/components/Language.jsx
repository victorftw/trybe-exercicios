import React, { Component } from 'react';

class Language extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        <select name="language" onChange={onChange} value={value}>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
        </select>
      </label>
    );
  }
}

export default Language;
