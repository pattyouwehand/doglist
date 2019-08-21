import React, {Component} from 'react'
import * as request from 'superagent'

export default class DogList extends Component {
    state = {dogBreeds: null}

    componentDidMount() {
        request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => this.updateBreeds(Object.keys(response.body.message)))
        .catch(console.error)
        
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        
        return (
            <div className="dogs-list">
                <h1>Dogs list</h1>
                {this.state.dogBreeds === null && "Loading..."}
                {this.state.dogBreeds != null && this.state.dogBreeds.map(breed => <li key= {breed} > {breed} </li> )}
                <ul>
                  
                </ul>




            </div>
        )
    }
}