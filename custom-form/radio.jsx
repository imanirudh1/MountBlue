import React, { Component } from 'react'
import Input from './Input'
import Joi from 'joi-browser'
import Select from 'react-select'
import Radio from './Radio'

export class Form extends Component {
  state = {
    account: { name: '', password: '', username: '' },
    errors: {},
    selectedOption: null,
  }
  schema = {
    name: Joi.string().required().label('Name'),
    password: Joi.string().required().label('Password'),
  }

  validateOnChange = ({ name, value }) => {
    const obj = { [name]: value }
    console.log(this.schema[name])
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)

    if (error) {
      return error.details[0].message
    } else {
      return {}
    }
  }
  handleChange = (e) => {
    const errors = { ...this.state.errors }
    const error = this.validateOnChange(e.currentTarget)
    if (Object.keys(error).length > 0) {
      errors[e.currentTarget.name] = error
    } else {
      delete errors[e.currentTarget.name]
    }
    const account = { ...this.state.account }
    account[e.currentTarget.name] = e.currentTarget.value
    this.setState({ account, errors })
  }

  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    })
    if (!error) return {}

    const errors = {}
    error.details.forEach((item) => {
      errors[item.path[0]] = item.message
    })
    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const errors = this.validate()
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      console.log('Submitted')
    } else {
      console.log(errors)
    }
  }
  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption })
  //   console.log(`Option selected:`, selectedOption)
  // }
  render() {
    const customStyles = {
      menu: (provided) => ({
        ...provided,
        width: '100%',
        borderBottom: '1px dotted pink',
        color: 'black',
        padding: 10,
      }),
    }

    const inputField = [
      { name: 'Name', type: 'text' },
      { name: 'Password', type: 'password' },
      { name: 'Password-Again', type: 'password' },
      { name: 'Email', type: 'email' },
    ]
    const radioButton = [
      { name: 'gender', value: 'male', type: 'radio' },
      { name: 'gender', value: 'female', type: 'radio' },
    ]
    const options = [
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'Java', label: 'Java' },
      { value: 'Python', label: 'Python' },
    ]

    return (
      <div className='form-background'>
        <i className='fas fa-code'></i>
        <h1>Join over 25 million learners from around the globe</h1>
        <p>
          Master the languages of the web: HTML,CSS,and JavaScript. This path
          will prepare you to build basic websites and then build interactive
          web apps
        </p>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='name'
            type='text'
            label='Full Name'
            value={this.state.account.name}
            onChange={this.handleChange}
            error={this.state.errors.name}
          />
          <Input
            name='username'
            type='text'
            label='Username'
            value={this.state.account.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          <Input
            name='password'
            type='password'
            label='Password'
            value={this.state.account.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          <Input
            name='phoneNumber'
            type='password'
            label='Phone Number'
            value={this.state.account.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          <Radio
            radioButton={radioButton}
            setInputValue={this.setInputValue}
            value={this.state.account.gender}
            onChange={this.handleChange}
          />
          <Select
            styles={customStyles}
            placeholder='Select Language'
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
        {/* <form onSubmit={this.handleSubmit}>
          <Input inputField={inputField} setInputValue={this.setInputValue} />
          <Radio radioButton={radioButton} setInputValue={this.setInputValue} />
      
          <button className='btn' type='submit'>
            Submit
          </button>
        </form> */}
        <footer></footer>
      </div>
    )
  }
}

export default Form
