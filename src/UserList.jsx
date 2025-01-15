import React from 'react'

class UserList extends React.Component {

    constructor()
    {
        super();
        this.state = {
            users : []
        }; 
    }

    componentDidMount()
    {
       fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => this.setState({ users: data }))
        .catch((err) => console.log(err));
    }


   // rendering 
  render() 
  {
    return (
        <div className='container m-5'>
            <h1>users List</h1>
            <div className="table-responsive " >
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            <th scope="col">address</th>
                            <th scope="col">phone</th>
                            <th scope="col">website</th>
                            <th scope="col">company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}</td>
                                    </tr>
                                
                            )})
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
      )
  }
}

export default UserList;