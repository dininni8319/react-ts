import { useState } from 'react';
//  interface Guest {
//    name: string;
//    guests: string[];
//  }
const GuestList: React.FC = () => {
    const [ name, setName] = useState('');
    // use the brackets to specify the type 
    const [ guests, setGuests ] = useState<string[]>([]);
    
    const newGuest = () => {
      setName('');
      setGuests([...guests, name])
    }
    return <div>
      <ul>
        { guests.map((guest, id) =>  {
          return <li key={id}>{guest}</li>
        })}
      </ul>
        <h2>Guest List!</h2>
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={newGuest}>Add Gest</button>
      </div>
}

export default GuestList;