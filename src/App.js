import { useSelector } from 'react-redux';
import AlertError from './AlertError';
import  AlertSuccess  from './AlertSuccess';
import './App.css';
import Footer from './Footer';
import Form from './Form';
import Loader from './Loader';

function App() {
  const {error, loading, success} = useSelector((state) => state.feedbacks);
  return (
    <>
      <div className='container'>
        <h1>Reach out to us!</h1>
        <Form/>
      </div>
      <Footer/>
      { error && <AlertError error={error}/>}
      { success && <AlertSuccess/> }
      { loading && <Loader/>}
    </>
  );
}

export default App;
