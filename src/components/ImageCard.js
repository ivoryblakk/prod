import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {spans: 0 };

        //grabs the handle
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        // add a listner to make sure the  image ref is loaded
        // something about the google dev tool  opens where its not actually opened untill you open the array/object
        // This why we add a listener
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // created to make show the full picture 
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });

    }
    render (){
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                 ref = {this.imageRef}
                 alt = {description}
                 src = {urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;