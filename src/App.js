import React from "react";
import './registerForm.css'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            phone: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert(`Full name: ${this.state.fullName}\nPhone number: ${this.state.phone}\nEmail: ${this.state.email}`)
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='formContainer'>
                <label>
                    Name and surname:
                    <input type="text" name='fullName' value={this.state.value} onChange={this.handleChange}
                           className='input'/>
                </label>
                <label>
                    Phone:
                    <input type="text" name='phone' value={this.state.value} onChange={this.handleChange}
                           className='input'/>
                </label>
                <label>
                    Email:
                    <input type="text" name='email' value={this.state.value} onChange={this.handleChange}
                           className='input'/>
                </label>
                    <input type="submit" value='Submit my info' className='submitButton'/>
            </form>
        )
    }
}

export default RegisterForm;
