import axios from 'axios';

// This pre-programs some of the config  iration 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ea3626d65745a9aba7fa71168b302af7af2b778281acb323d0c53ef66884518e'
    }
});