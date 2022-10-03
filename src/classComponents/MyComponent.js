import React from 'react';


class MyComponent extends React.Component{
    render() {
        return (
            <div>
                <h1>Chanakya</h1>
            <div style={{display:`${this.props.displayValue}`}}>
                {this.props.children}
            </div>
            </div>
        )
    }
}

export default MyComponent;