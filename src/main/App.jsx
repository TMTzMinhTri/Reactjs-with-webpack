import React from 'react'

import Header from '../components/Header'

export default class App extends React.Component {
    state ={
        abc : 1
    }
    render(){
        return <div>
            <Header />
            <div>Main</div>
            <div> {this.state.abc} </div>
        </div>
    }
}