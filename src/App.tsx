import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { WELCOME_RENDER_TIME } from './constants';

function App() {
  const navigator = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigator('/home');
    }, WELCOME_RENDER_TIME);

    return clearTimeout(timeout);
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
