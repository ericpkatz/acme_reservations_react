import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Components/Users';
import Restaurants from './Components/Restaurants';
import Header from './Components/Header';
import { deleteUser, createUser, fetchRestaurants, fetchUsers } from './api';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [],
      restaurants: []
    };
    this.createAUser = this.createAUser.bind(this);
    this.deleteAUser = this.deleteAUser.bind(this);
  }
  async componentDidMount(){
    let response = await fetchUsers();
    this.setState({ users: response.data });
    response = await fetchRestaurants();
    this.setState({ restaurants: response.data });
  }
  async createAUser(){
    const user = await createUser({ name: Math.random() });
    const users = [...this.state.users, user];
    this.setState({ users });
  }
  async deleteAUser(user){
    await deleteUser(user);
    const users = this.state.users.filter(_user => _user.id !== user.id);
    this.setState({ users });
  }
  render(){
    const { users, restaurants } = this.state;
    const { createAUser, deleteAUser } = this;
    return (
      <div>
        <Header />
        <main>
          <section>
            <h2>Users ({ users.length })</h2>
            <button onClick={ createAUser }>Create A User</button>
            <Users users={ users } deleteAUser={ deleteAUser }/>
          </section>
          <section>
            <h2>Restaurants ({ restaurants.length })</h2>
            <Restaurants restaurants={ restaurants }/>
          </section>
        </main>
        <Header toUpperCase={ true }/>
      </div>
    );
  }
}


const root = document.querySelector('#root');
ReactDOM.render(
  <App />,
  root
);


