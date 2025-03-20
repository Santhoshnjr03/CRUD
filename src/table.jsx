import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function DarkExample(bcd) {
  const [tableData, setTabledata] = useState(null);
  useEffect(function () {
    fetch('https://67d7ed199d5e3a10152c9b2c.mockapi.io/employeecrud/Detail', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setTabledata(tasks.reverse());
    }).catch(error => {
      // handle error
    })
  }, [bcd.update]);
  console.log(tableData);

  const deleteUser = (iduser) => {

    fetch(`https://67d7ed199d5e3a10152c9b2c.mockapi.io/employeecrud/Detail/${iduser}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      // Do something with deleted task
      alert("Deleted");
      bcd.setUpdate=(!bcd.update)
    }).catch(error => {
      // handle error
    })
  }

  return (
    <>
    <Button variant={"warning"} className='m-3' onClick={()=>bcd.cardClick()}>Add / Create</Button>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className='fs-5'>
          <th className='p-3'>S.No</th>
          <th className='p-3'>Name</th>
          <th className='p-3'>Email</th>
          <th className='p-3'>Location</th>
          <th className='p-3'>Phone No</th>
          <th className='p-3'>Qualification</th>
          <th className='p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.map((inpval, outval) => {
          return (
            <>
              <tr className='text-center'>
                <td className='p-3'>{outval + 1}</td>
                <td className='p-3'>{inpval.Name}</td>
                <td className='p-3'>{inpval.Emailid}</td>
                <td className='p-3'>{inpval.Location}</td>
                <td className='p-3'>{inpval.PhoneNo}</td>
                <td className='p-3'>{inpval.Qualification}</td>
                <td className='p-3'>
                  <Button onClick={() => bcd.cardClick(inpval)} variant="success me-3" >Edit</Button>
                  <Button variant="danger" onClick={() => deleteUser(inpval.iduser)}>Delete</Button>
                </td>
              </tr>
            </>
          )
        })}
        {/* */}
      </tbody>
    </Table>
    </>
  );
}

export default DarkExample;