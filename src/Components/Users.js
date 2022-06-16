import React from 'react';

const Users = ({ users, deleteAUser })=> {
  return (
    <ul>
      {
        users.map( user => {
          return (
            <li key={ user.id }>
              { user.name }
              <button onClick={ ()=> deleteAUser(user)}>x</button></li>
            );

        })
      }
    </ul>
  );
};

export default Users;
