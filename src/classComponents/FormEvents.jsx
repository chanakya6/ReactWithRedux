import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import AdminPage from './AdminPage';

class FormEvents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',  
            errorMsg:'',
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.email === 'yechurichanakya@gmail.com' && this.state.password === 'admin123') {
            
            this.setState({
                errorMsg: `Welcome...! ${this.state.email}`,
            });
          
        }
        else {
            this.setState({
                errorMsg:'Unauthorised credentials....'
            })
        }
    }
    render() {
        return (
        <Form onSubmit={this.handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  placeholder="Enter email"  name="email" onChange={this.handleChange} />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={this.handleChange} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
                {this.state.errorMsg && <h1 style={{color:'red'}} >{ this.state.errorMsg }</h1>}          
    </Form>
        )
    }
}

export default FormEvents;