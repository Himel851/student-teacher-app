import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useAuth } from '../../context/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const StudentProfile = () => {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const { id } = router?.query;
  const [student, setStudent] = useState({});

  useEffect(() => {
    if (auth?._id) {
      // Fetch the doctor's details based on the doctorId
      axios.get(`http://localhost:4024/api/v1/student/view-profile/${auth?._id}`)
        .then(response => {
          setStudent(response.data?.data);
          console.log('student profile', response.data?.data);
        })
        .catch(error => {
          console.error('Error fetching doctor details:', error);
        });
    }
  }, [auth?._id]);


  return (
    <div style={{ marginTop: '4rem', padding: '30px' }}>
      <Container>
        <Row>
          <Col md={6} xl={3} className='mt-3'>
            {student?.profilePic ? (
              <img className='rounded' src={student?.profilePic} width={250} height={200} />
            ) : (
              <img className='rounded' src="/image/no-photo.png" width={250} height={200} />
            )}
            <div className='d-none d-md-block'>
              {auth?.role === 'student' && <div className='d-flex justify-content-center'>
                <Link href={`/edit-student-profile?id=${auth?._id}`} as={`/edit-student-profile?id=${student?._id}`}>
                  <Button variant="success" className="mt-4">Edit Profile</Button>
                </Link>
              </div>
              }
            </div>
          </Col>
          <Col md={6} xl={7} className='mt-3'>
            <p className='fs-2'> <b>Name:</b>  {student?.name}</p>
            <p className='fs-2'> <b>Email:</b>  {student?.email}</p>
            <p className='fs-2'> <b>age:</b>  {student?.age}</p>
            <p className='fs-2'> <b>Number:</b>  {student?.phone}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentProfile