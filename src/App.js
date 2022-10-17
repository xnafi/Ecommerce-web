import { RouterProvider } from 'react-router-dom';
import Root from './Components/Routes/Root';

function App() {

  return (
    <div className="App">
      <RouterProvider router={Root} />
    </div>
  );
}

export default App;
