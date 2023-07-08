import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const StudentAppointment = () => {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  // const [appointmentData, setAppointmentData] = useState({
  //   // teacherName: '',
  //   teacherId: auth?._id.toString(),
  //   // teacherAge: null,
  //   // teacherGender: '',
  //   // teacherPhone: '',
  //   studentId: router.query.id.toString(), // Set doctor ID as a string using router.query.id.toString(),
  //   slot: '',
  //   reason: '',
  // });

  const [appointmentData, setAppointmentData] = useState({
    teacherId: router?.query?.id ?? '',
    studentId: auth?._id ?? '',
    slot: '',
    reason: '',
  });

  console.log(auth?._id)




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createAppointment(appointmentData);
    // Handle form submission logic here
  };

  // Function to handle appointment creation
  const createAppointment = async (appointmentData) => {
    try {
      // Make an API request to create an appointment using Axios
      const response = await axios.post('http://localhost:4024/api/v1/appointment/create', appointmentData);

      const appointment = response.data;
      // console.log('Appointment created:', appointment);
      toast.success('Appointment created successfully!');
      router.push('/teacher-list');
      // if (response.status === 200) {
      //     const appointment = response.data;
      //     console.log('Appointment created:', appointment);
      //     toast.success('Appointment created successfully!');
      // } 
      // else {
      //     console.log('Appointment creation failed');
      //     toast.error('Appointment creation failed');
      // }
    } catch (error) {
      console.error('Error creating appointment:', error);
      // Handle any network or other errors
    }
  };

  useEffect(() => {
    // Call the createAppointment function when the component mounts
    createAppointment(appointmentData);
    createAppointment();
  }, [router.query.id]);

  const inputStyle = {
    marginBottom: '1rem',
  };


  return (
    <div style={{ marginTop: '4rem' }}>
      <Container>
        <h1>Teacher Appointment</h1>
        <Form onSubmit={handleSubmit}>
          {/* <div className='d-flex gap-4'>
                        <Form.Group controlId="formName">
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control style={inputStyle} name='teacherName' type="text" placeholder="Enter your name" value={appointmentData.teacherName}
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>teacher Age</Form.Label>
                            <Form.Control style={inputStyle} name='teacherAge' type="number" placeholder="Enter your age" value={appointmentData.teacherAge}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </div> */}

          {/* <div className='d-flex gap-4'>
                        <Form.Group controlId="formBasicName">
                            <label htmlFor="gender" className="ms-4" >Gender</label>
                            <select name="teacherGender" className="form-control ms-2" required
                                value={appointmentData.teacherGender}
                                onChange={handleInputChange} style={{ width: '100px' }}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </Form.Group>

                        <Form.Group controlId="formTime">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control style={inputStyle} name='teacherPhone' type="number" value={appointmentData.teacherPhone}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </div> */}
          <div className=''>
            <Form.Group controlId="formName">
              <Form.Label>Slot</Form.Label>
              <Form.Control style={inputStyle} name='slot' type="datetime-local" placeholder=" time" value={appointmentData.slot}
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows={4} cols={50} name='reason' style={inputStyle} type="number" placeholder="Reason" value={appointmentData.reason}
                onChange={handleInputChange} />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>


  );
};



export default StudentAppointment