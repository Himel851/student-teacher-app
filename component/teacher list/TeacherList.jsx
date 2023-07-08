import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, Row, Table } from 'react-bootstrap'

const TeacherList = () => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('Computer Science & Engineering');
    const [teachers, setTeachers] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch the department data from your API endpoint
        axios.get('http://localhost:4024/api/v1/department/view')
            .then(response => {
                setDepartments(response.data.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching departments:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedDepartment) {
            // Fetch the doctors based on the selected department
            axios.get(`http://localhost:4024/api/v1/teacher/view/teacher/${selectedDepartment}`)
                .then(response => {
                    setTeachers(response.data.data);
                    console.log(response.data.data)
                })
                .catch(error => {
                    console.error('Error fetching teachers:', error);
                });
        }
    }, [selectedDepartment]);


    const handleDepartmentSelection = (department) => {
        setSelectedDepartment(department);
        // Do something with the selected department (e.g., send it to the server, update state, etc.)
        console.log('Selected department:', department);
    };
    const handleProfileClick = (teacherId) => {
        router.push(`/teacher-profile/${teacherId}`);
    };

    return (
        <div style={{ marginTop: '4rem' }}>
            <div className='d-flex justify-content-center gap-3' style={{ padding: '30px' }}>
                <Dropdown>
                    <div className='d-flex justify-content-center gap-3' >
                        <h4>Select Department: </h4>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selectedDepartment}
                        </Dropdown.Toggle>
                    </div>
                    <Dropdown.Menu >
                        {departments.map(department => (
                            <Dropdown.Item
                                key={department._id}
                                onClick={() => handleDepartmentSelection(department.departmentName)} >{department.departmentName}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Container>
                <Row>
                    {teachers.length > 0 ? <> {teachers.map(teacher => (
                        <Col xl={3} md={6} sm={12} className='mt-3' key={teacher._id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/image/doctor1.jpg" />
                                <Card.Body>
                                    <Card.Title>{teacher.name}</Card.Title>
                                    <Card.Text>
                                        <b>Speciality -</b> lorem lorem <br />
                                        <b>Degree-</b> MBBS
                                    </Card.Text>
                                    <div className='d-flex gap-3'>
                                        <Link href={`/create-appointment/${teacher._id}`}>
                                            <Button variant="success">Get Appointment </Button>
                                        </Link>
                                    
                                        <div className='d-flex gap-3'>
                                            <Button variant="success" onClick={() => handleProfileClick(teacher._id)}>Profile</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}</> :
                        <>
                            <h1 className='text-center'>No Teachers Found</h1>
                        </>}
                </Row>

            </Container>
        </div>
    )
}

export default TeacherList