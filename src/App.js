import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Notes from './component/Notes/Notes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="row h-100 w-100 p-2 main_body">
        <div className='col-sm-12 col-md-2 col-lg-2'>
          <Sidebar />
        </div>
        <div className='col-sm-12 col-md-10 col-lg-10 p-3 m-auto notes_bg'>
          <Notes />
        </div>
      </div>
    </Provider>
  );
}

export default App;
