import React from 'react';
import { Button} from 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function New_Login() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h2 className="my-5 display-4 fw-bold ls-tight px-3">
          Cloud-based IOT and Smart Meter Management System<br />
            {/* <span className="text-primary">for your business</span> */}
          </h2>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          A smart IOT cloud management platform which supports the management and control of diverse 
IOT stations and meters in smart buildings or a community.
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <h3>Sign In</h3>
      <br></br>

              <MDBInput style={{width : "400px", marginBottom:"10px", textAlign:'left'}} wrapperClass='mb-12' label='Email' id='form1'
               type='email' placeholder='username'/>
              <MDBInput style={{width : "400px", marginBottom:"10px",textAlign:'left'}} wrapperClass='mb-12' label='Password' id='form1' type='password'
              placeholder='************'/>
              
             <br></br>

              {/* <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> */}
              <Button style={{width : "400px"}}>Sign In</Button>

              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default New_Login;