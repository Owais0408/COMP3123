import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        // Fetch only required fields: name, email, location, and login
        axios.get('https://randomuser.me/api/?results=10&inc=name,email,location,login')
            .then(res => {
                console.log(res.data); // Debugging: Log the API response
                const persons = res.data.results; // Extract the results array
                this.setState({ persons }); // Update the state with fetched users
            })
            .catch(err => {
                console.error('Error fetching data:', err); // Log errors for debugging
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h1 className="mb-4">User List</h1>
                <ul className="list-group">
                    {this.state.persons.map(person => (
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={person.login.uuid}
                        >
                            <div>
                                {/* Render user name */}
                                <strong>{person.name.first} {person.name.last}</strong>
                                <br />
                                {/* Render user email */}
                                {person.email}
                                <br />
                                {/* Render user location */}
                                {person.location.city}, {person.location.country}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
