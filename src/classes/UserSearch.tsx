import { userInfo } from 'os';
import { Component } from 'react';

interface User {
   name: string, 
   age: number  
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component <UserSearchProps>{
  state: UserSearchState = {
    name: '',
    user: undefined,
  }

  onClick = () => {
    const userFound = this.props.users.find((user) => {
      return user.name === this.state.name
      
    })
    
    this.setState({ user: userFound })
  }

  render(){
     const { name, user } = this.state;
      return (
        <div>
            User Search
          <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})} />
           <button onClick={this.onClick}>Find A User!</button>
          <div>
            <span>{user?.name ?? 'User not Found!'}</span><br/>
            <span>{user?.age ?? 'Age not Found!'}</span>
          </div>
        </div>
      )
   }
}

export default UserSearch;