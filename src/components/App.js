import React from 'react';
import unsplash from '../api/unsplash'
//import axios from 'axios'; this was used before we made the api folder
import SearchBar from './SearchBar';
import ImageList from './imageList';


class App extends React.Component {
    state = { images: [] };
   onSearchSubmit =  async term => {
        const response = await unsplash.get('/search/photos', 
           { params: { query: term}
        });

        this.setState({images: response.data.results});
    }
    render () {
     return (
        <div className="ui container" style={{marginTop: '10px'}}> 
            <SearchBar onSubmit={this.onSearchSubmit}/> 

            Found : {this.state.images.length}
            <ImageList images={this.state.images} />
        </div>
     );
    }
}

export default App; 


// v1  One way to do a Axios search
// onSearchSubmit(term){
//     //   console.log(term);
//        axios.get('https://api.unsplash.com/search/photos', {
//            params: { query: term},
//            headers:{
//                Authorixation: 'Client-ID ea3626d65745a9aba7fa71168b302af7af2b778281acb323d0c53ef66884518e'
//            }
//        }).then(() => {
//            console.log(response.data.results);
//        })
//    }

//v2 of the with await and sync
// onSearchSubmit =  async term => {
//     const response = await axios.get('https://api.unsplash.com/search/photos', {
//         params: { query: term},
//         heanpmders:{
//             Authorization: 'Client-ID ea3626d65745a9aba7fa71168b302af7af2b778281acb323d0c53ef66884518e'
//         }
//     })

//     this.setState({images: response.data.results});
// }