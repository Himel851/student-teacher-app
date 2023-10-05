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
      {/* <Container>
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
      </Container> */}
      <Container className="p-3 profileHeight">
        <Row>
          <Col md={4}>
            <div className="text-center">
              {student?.profilePic ? (
                <img className='rounded' src={student?.profilePic} width={250} height={200} />
              ) : (
                <img className='rounded' src="/image/no-photo.png" width={250} height={200} />
              )}
            </div>
          </Col>
          <Col md={8}>
            <h2>{student?.name}</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>Id:</strong> {student?.idNo}
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> {student?.phone}
              </li>
              <li className="mb-2">
                <strong>Email:</strong> {student?.email}
              </li>
              <li className="mb-2">
                <strong>Age:</strong> {student?.age}
              </li>

            </ul>

            {auth?.role === 'student' && <div className=''>
              <Link href={`/edit-student-profile?id=${auth?._id}`} as={`/edit-student-profile?id=${student?._id}`}>
                <Button style={{ backgroundColor: '#239bb5' }} className="mt-4">Edit Profile</Button>
              </Link>
            </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentProfile