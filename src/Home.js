import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div>
                <div style={{background: 'url(amplify.png)', width: '100%', height: '80vh', 
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}
                />
            </div>
        )
    }
}

export default Home
