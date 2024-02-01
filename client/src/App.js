
// Styling 
import "./Styling/File/app.style.css";

// React router dom and routing
import { RouterProvider } from 'react-router-dom';

// Routing 
import { mainRouting } from "./Routing/routing";

function App() {
  return (
    <div>
      <RouterProvider router={mainRouting} />
    </div>
  );
}

export default App;
