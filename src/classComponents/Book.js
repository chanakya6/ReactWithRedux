import React from 'react';
import { Button } from 'react-bootstrap';
import {AdminPage as Sunny} from './AdminPage';

class Book extends React.Component{
    constructor(props) {
        super(props);
        this.state = { color: 'red', name: 'Modern React with Redux',year:200}
        console.log(this);
        
        // this.changeColor = this.changeColor.bind(this);
    }
    // static getDerivedStateFromProps(props) {
    //      return {year:props.year,color:props.color}
    //  }
   changeColor=() =>{
       this.setState({color:'blue'})
    }
       componentDidMount() {
        setTimeout(() => {
            this.setState({color:'pink'})
        }, 5000);
    }

    componentDidUpdate() {
        setTimeout(() => {
           this.setState({name: 'Component Class Updated'})
        },3000)
    }

    componentWillUnmount() {
       alert('Unmounted component called.')
    }

    // shouldComponentUpdate() {
    //     return false;
    // }
    
    render() {
        return (
            <div>
                <Sunny email="Sunil Kumar Shinde" />
                <p>This is a {this.state.color} colored book of
            class component named as {this.state.name} and published in the year of {this.state.year }</p>
            <Button onClick={this.changeColor} >Change Color</Button>
            </div>
        )
    
    }

}

export default Book;