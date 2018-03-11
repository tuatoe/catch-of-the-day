import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
    myInput = React.createRef();
    
    goToStore = event => {
        // stop form from submitting
        event.preventDefault();
        // get the text from that input
        const storeName = this.myInput.value.value;
        //change the page to /store/whatever they entered
        this.props.history.push(`/store/${storeName}`);
    };
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                type="text" 
                ref={this.myInput}
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()}
                 />
                <button type="submit">Visit store </button>
            </form>
        );
    }
}