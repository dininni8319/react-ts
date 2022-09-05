import { useState, useEffect, useRef } from 'react';

const users = [
  { name: 'Sarah', age: 22},
  { name: 'Marc', age: 22},
  { name: 'Salvo', age: 22},
  { name: 'Gigi', age: 22},
];

const UserSearch:React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null >(null);

  const [ name, setName ] = useState<string>('');
  const [ user, setUser ] = useState<{ name:string , age: number } | undefined>()
  
  useEffect(() => {
    if (!inputRef.current) {
       return;
    }
    //this allow you to type in the input without clicking in it
    inputRef.current.focus();
  }, [])
  
  const Click = () => {
    const userFound = users.find((user) => {
      if (user.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        return user.name;
      } 
       
    })
    
    setUser(userFound);
  }
  
  console.log(user, 'testing the user');
  
  return <div>
      User Search
      <input type="text" ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <button onClick={Click}>Find A User!</button>
      <div>
        <span>{user?.name ?? 'User not Found!'}</span><br/>
        <span>{user?.age ?? 'Age not Found!'}</span>
      </div>
    </div>
}

export default UserSearch