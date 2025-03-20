import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Popup(xyz) {
  console.log(xyz.field, "hi")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateData = () => {

    fetch(`https://67d7ed199d5e3a10152c9b2c.mockapi.io/employeecrud/Detail/${xyz.field.Id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(xyz.field)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("Success");
      xyz.setRefresh(!xyz.refresh);
    }).catch(error => {
      // handle error
    });

    xyz.cardClose();
  }
  const createUser=()=>{
    
    fetch('https://67d7ed199d5e3a10152c9b2c.mockapi.io/employeecrud/Detail', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(xyz.field)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
      alert("Created");
      xyz.setrefresh=(!xyz.refresh);
    }).catch(error => {
      // handle error
    })
    xyz.cardClose();
  }
  return (
    <>

      <Modal show={xyz.cardShow} onHide={xyz.cardClose}>
        <Modal.Header closeButton>
          <Modal.Title>{xyz.field.Id ? "Add Data" : "Edit Data"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="willam"
                autoFocus
                defaultValue={xyz.field.Name}
                onChange={(e) => xyz.setfield({ ...xyz.field, Name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={xyz.field.Emailid}
                onChange={(e) => xyz.setfield({ ...xyz.field, Emailid: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Chennai"
                autoFocus
                defaultValue={xyz.field.Location}
                onChange={(e) => xyz.setfield({ ...xyz.field, Location: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                placeholder="91+ 63*********"
                autoFocus
                defaultValue={xyz.field.PhoneNo}
                onChange={(e) => xyz.setfield({ ...xyz.field, PhoneNo: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="BCA"
                autoFocus
                defaultValue={xyz.field.Qualification}
                onChange={(e) => xyz.setfield({ ...xyz.field, Qualification: e.target.value })}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={xyz.cardClose}>
            Close
          </Button>
          {xyz.field.Id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> : 
          <Button variant="success" onClick={createUser}>
          Create
        </Button>}
        </Modal.Footer>
      </Modal>
    </>
  )
}