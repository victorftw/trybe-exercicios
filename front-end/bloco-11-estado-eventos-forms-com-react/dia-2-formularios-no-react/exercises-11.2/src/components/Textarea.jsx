import React, { Component } from 'react';

class Textarea extends Component {
  render() {
    const { value, onChange } = this.props;

    let error = undefined;
    if (value.length > 90) error = 'Texto muito grande';

    return (
      <>
        <label>
          Nos conte algo sobre você! :D
          <br />
          <textarea name="about" value={value} onChange={onChange}></textarea>
          <span>{error ? error : ''}</span>
        </label>
      </>
    );
  }
}

export default Textarea;
