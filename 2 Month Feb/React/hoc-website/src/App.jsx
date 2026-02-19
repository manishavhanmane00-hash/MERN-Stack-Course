import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsCard from './components/DetailsCard';


function App() {
  return (
    <>
      <div className='container'>
        <div className='row my-2'>
          <div className='col-md-3'>
            <DetailsCard CardTitle="Hoc" CardDescription="Karad" />
          </div>
          <div className='col-md-3'>
            <DetailsCard CardTitle="HOC" CardDescription="Karad" />
          </div>
          <div className='col-md-3'>
            <DetailsCard CardTitle="HOC" CardDescription="Karad" />
          </div>
          <div className='col-md-3'>
            <DetailsCard CardTitle="HOC" CardDescription="Karad" />
          </div>
        </div> 
        <div className='row my-2'>
          <div className='col-md-3'>
            <DetailsCard CardTitle="Hoc" CardDescription="Karad" />
          </div>
          <div className='col-md-3'>
            <DetailsCard CardTitle="HOC" CardDescription="Karad" />
          </div>
          <div className='col-md-3'>
            <DetailsCard CardTitle="HOC" CardDescription="Karad" />
          </div>
          <div className='col-md-3'>
            <DetailsCard CardTitle="HOC" CardDescription="Karad" />
          </div>
        </div>            
      </div>
    </>
  );
}

export default App;
