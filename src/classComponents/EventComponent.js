import React from 'react';
// import Button from 'react-bootstrap/Button';

class EventComponent extends React.Component{
    constructor(props) {
        super(props);
        // this.state={clickNumber:0}
        this.state = { isLoggedIn: false };
    }
    // clickEvent = (event, num1) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         clickNumber: this.state.clickNumber + num1
    //     })
    //     // alert('you clicked me.....')
    // }
    // handleLogin = () => {
    //     this.setState({
    //         isLoggedIn: true,
    //     })
    // }
    // handleLogout = () => {
    //     this.setState({
    //         isLoggedIn: false,
    //     })
    // }
    render() {
        // let button;
        // if (this.state.isLoggedIn) {
        //    button = <Button onClick={this.handleLogout} >Logout</Button>
        // } else {
        //     button =<Button onClick={() => { this.setState({ isLoggedIn: true }) }}>Login</Button>
        // }

        const numbers = [1, 2, 3, 4, 5, 6];
        const doubledNumbers = numbers.map((value,index) =>  <li  key={index.toString()}>{value * 2 }</li>)
        return (
            // <div>
            //     {/* {this.state.isLoggedIn ?
            //         <Button onClick={this.handleLogout} >Logout</Button> :
            //         <Button onClick={() => { this.setState({ isLoggedIn: true }) }}>Login</Button>} */}
            //     {/* {
            //         this.state.isLoggedIn && <h1 style={{color:'red'}} >Please logout from the application, expiring soon...!</h1>
            //     }
 
            //     {button} */}
            // </div>
            <ul>{doubledNumbers }</ul>

        )
      
    }
}

export default EventComponent;