import React from 'react';
import  Button from 'react-bootstrap/Button';

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchData: '',
            list : [],
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]  : event.target.value,
        })
    }
    handleSubmit = (event) => {
       // debugger;
        event.preventDefault();
        // let newList = [...this.state.list];
        // newList.push(this.state.searchData);
        this.setState({
            list: [...this.state.list, this.state.searchData]
        })
        console.log(this.state);
        
    }
    render() {
        return (
            <div style={{marginLeft:'40%'}}>
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchData" id="searchData" autoComplete='off'
                     onChange={this.handleChange} />
                    <br /><br />
                    <Button  type='submit' >Submit</Button>
                   {/* {this.state.searchData &&  <h1>{this.state.searchData}</h1>} */}
                </form>
            </div>
        )
       
    }
}

export default TodoList;