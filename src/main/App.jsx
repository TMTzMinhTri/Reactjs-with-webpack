import React from 'react'


import Header from '../components/Header'
import Footer from '../components/Footer'
export default class App extends React.Component {
    state = {
        abc: 1
    }
    render() {
        return <div>
            <Header />
            <div className='main'>Main</div>
            <div> {this.state.abc} </div>
            <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
            <Footer />
        </div>
    }
}