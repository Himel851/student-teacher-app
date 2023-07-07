import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import Link from 'next/link';
import axios from 'axios';

const TeacherProfile = () => {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const { id } = router?.query;
  const [teacher, setTeacher] = useState({});
  console.log(id);

  useEffect(() => {
    if (id) {
      // Fetch the doctor's details based on the doctorId
      axios.get(`http://localhost:4024/api/v1/teacher/view-profile/${id}`)
        .then(response => {
          setTeacher(response.data?.data);
          console.log(response.data?.data);
        })
        .catch(error => {
          console.error('Error fetching doctor details:', error);
        });
    }
  }, [id]);


  return (
    <div style={{ marginTop: '4rem' }}>
      <Container>
        <Row className='pt-5'>
          <Col xl={4} md={6}  >
            {teacher?.profileImage ? (
              <img src={teacher.profileImage} width={400} height={300} />
            ) : (
              <img src="/image/no-photo.png" width={400} height={300} />
            )}


            <h3> {teacher?.name}</h3>
            <p><b>Phone -</b> {teacher?.phone} </p>
            <p><b>Email -</b> {teacher?.email} </p>

            {auth?.role === 'teacher' && <div className='d-flex justify-content-center'>
              <Link href={`/edit-profile?id=${teacher?._id}`} as={`/edit-profile?id=${teacher?._id}`}>
                <Button variant="success" className="mt-4">Edit Profile</Button>
              </Link>

            </div>

            }

          </Col>
          <Col xl={8} md={6}  >
            <p><b>Gender -</b> {teacher?.gender} </p>
            <p><b>Age -</b> {teacher?.age} </p>
            <p> <b>Address -</b> {teacher?.address} </p>
            <p><b>Department -</b> {teacher?.department}</p>
            <p> <b>Education -</b> {teacher?.education}</p>
            <p> <b>Experience  -</b> {teacher?.experience} </p>
            <p> <b>Address -</b> {teacher?.address} </p>
            <p> <b>Speciality -</b>{teacher?.specialty} </p>
            <p> <b>Short Description -</b> {teacher?.shortDescription} </p>

          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default TeacherProfile