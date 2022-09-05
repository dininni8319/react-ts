import ReactDOM from 'react-dom';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
  return <div>

    {/* <GuestList /> */}
    <UserSearch />
    {/* <EventComponent /> */}
    {/* <Parent /> */}
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
)