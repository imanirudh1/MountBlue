import React, { Component } from 'react'

export class Radio extends Component {
  state = {}
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.props.setInputValue(name.toLowerCase(), value)
  }
  render() {
    const formElement = this.props.radioButton.map((val) => {
      return (
        <div className='radio-group' key={val.value}>
          <input
            name={val.name}
            type={val.type}
            value={val.value}
            checked={this.state[val.name] === val.value}
            onChange={this.handleChange}
          />
          <label>{`${val.value[0].toUpperCase()}${val.value.slice(1)}`}</label>
        </div>
      )
    })
    return <div className='radio-container'>{formElement}</div>
  }
}

export default Radio


import React from 'react'

const Radio = ({ name, value, onChange, type, label, error }) => {
  return (
    <div className='form-group'>
      <input
        className='input-box'
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={`Enter your ${label}`}
        onChange={onChange}
      />
      {error && <small className='error'>{error}</small>}
    </div>
  )
}

export default Radio

// import React, { Component } from 'react'

// export class Input extends Component {
//   state = {}
//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({ [name]: value })
//     this.props.setInputValue(name.toLowerCase(), value)
//   }
//   render() {
//     const formElement = this.props.inputField.map((val) => {
//       return (
//         <div className='form-group' key={val.name}>
//           <input
//             className='input-box'
//             name={val.name}
//             type={val.type}
//             value={this.state[val.name] || ''}
//             placeholder={`Enter your ${val.name}`}
//             onChange={this.handleChange}
//           />
//         </div>
//       )
//     })
//     return <div>{formElement}</div>
//   }
// }

// export default Input
