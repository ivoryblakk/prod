import React from 'react';

// This is controlled element/component
// Its users info now lives in the react world
//try not to store the data in the dom.. we want React to store the data
// we dont need to look at the  doom just look at the state
class SearchBar extends React.Component {
    state = { term: ''};

    // arrow binds "this" to the correct object ... try to use arrow function or 
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
        // we use event.preventDefault so if you press enter theform will not submit
    }
    // onInputChange do not put parehthiss on it... because we do not want to envoke it
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label>Image Search</label>
                <input type ='text'
                        value ={this.state.term}
                        onChange={e => this.setState({term: e.target.value})} />   
                </div>
            </form>    
        </div>
        )
    }
}

export default SearchBar;


//Version 1
// This is an uncontrolled Element
// All of the users info was living in the HTML area and not the React Area
// class SearchBar extends React.Component {
//     onInputChange (event){
//         event.target.value

//     }
//     // onInputChange do not put parehthiss on it... because we do not want to envoke it
//     render(){
//         return (
//         <div className="ui segment">
//             <form className="ui form">
//                 <div className="field">
//                 <label>Image search</label>
//                 <input type ='text'
//                      
//                         onChange={this.onInputChange} />   
//                 </div>
//             </form>    
//         </div>
//         )
//     }
// }