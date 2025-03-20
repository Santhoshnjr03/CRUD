import { useState } from 'react'
import Table from './table.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Popup from './popup'

function App() {
  const [status, setStatus] = useState(false);
  const [temp, setTemp] = useState({
    Name: null,
    Location: null,
    PhoneNo: null,
    Qualification: null,
    Emailid: null
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if (rowData) {
      setTemp(rowData);
    }else{
      setTemp({
        Name: null,
        Location: null,
        PhoneNo: null,
        Qualification: null,
        Emailid: null
      });
    };
    setShow(true);
  }

  return (
    <Container fluid className='p-4'>
      <Popup refresh={status} setRefresh={setStatus} cardShow={show} cardClose={handleClose} field={temp} setfield={setTemp} />
      <Table cardClick={handleShow} update={status} setUpdate={setStatus} />
    </Container>
  )
}
export default App
