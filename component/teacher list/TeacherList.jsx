import React from 'react'
import { Table } from 'react-bootstrap'

const TeacherList = () => {
    const teachers = [
        {
            name: 'John Smith',
            email: 'johnsmith@example.com',
            faculty: 'Science',
            subject: 'Physics',
            address: '123 Main St',
            designation: 'Professor'
        },
        {
            name: 'Jane Johnson',
            email: 'janejohnson@example.com',
            faculty: 'Engineering',
            subject: 'Mechanical Engineering',
            address: '456 Elm St',
            designation: 'Associate Professor'
        },
        {
            name: 'David Williams',
            email: 'davidwilliams@example.com',
            faculty: 'Arts',
            subject: 'English Literature',
            address: '789 Oak St',
            designation: 'Assistant Professor'
        },
        {
            name: 'Sarah Davis',
            email: 'sarahdavis@example.com',
            faculty: 'Business',
            subject: 'Finance',
            address: '321 Pine St',
            designation: 'Professor'
        },
        {
            name: 'Michael Brown',
            email: 'michaelbrown@example.com',
            faculty: 'Science',
            subject: 'Biology',
            address: '654 Cedar St',
            designation: 'Associate Professor'
        },
        {
            name: 'Emily Wilson',
            email: 'emilywilson@example.com',
            faculty: 'Engineering',
            subject: 'Computer Science',
            address: '987 Maple St',
            designation: 'Assistant Professor'
        },
        {
            name: 'Daniel Thompson',
            email: 'danielthompson@example.com',
            faculty: 'Arts',
            subject: 'History',
            address: '876 Birch St',
            designation: 'Professor'
        },
        {
            name: 'Jessica Anderson',
            email: 'jessicaanderson@example.com',
            faculty: 'Business',
            subject: 'Marketing',
            address: '543 Walnut St',
            designation: 'Associate Professor'
        },
        {
            name: 'Olivia Martin',
            email: 'oliviamartin@example.com',
            faculty: 'Science',
            subject: 'Chemistry',
            address: '234 Ash St',
            designation: 'Assistant Professor'
        },
        {
            name: 'Daniel Thomas',
            email: 'danielthomas@example.com',
            faculty: 'Engineering',
            subject: 'Electrical Engineering',
            address: '765 Spruce St',
            designation: 'Professor'
        },
        {
            name: 'Sophia Jackson',
            email: 'sophiajackson@example.com',
            faculty: 'Arts',
            subject: 'Psychology',
            address: '890 Pine St',
            designation: 'Associate Professor'
        },
        {
            name: 'Ethan Moore',
            email: 'ethanmoore@example.com',
            faculty: 'Business',
            subject: 'Management',
            address: '321 Cedar St',
            designation: 'Assistant Professor'
        },
        {
            name: 'Isabella White',
            email: 'isabellawhite@example.com',
            faculty: 'Science',
            subject: 'Mathematics',
            address: '654 Elm St',
            designation: 'Professor'
        },
        {
            name: 'Liam Harris',
            email: 'liamharris@example.com',
            faculty: 'Engineering',
            subject: 'Civil Engineering',
            address: '987 Oak St',
            designation: 'Associate Professor'
        },
        {
            name: 'Ava Clark',
            email: 'avaclark@example.com',
            faculty: 'Arts',
            subject: 'Sociology',
            address: '876 Pine St',
            designation: 'Assistant Professor'
        },
        {
            name: 'Mia Young',
            email: 'miayoung@example.com',
            faculty: 'Business',
            subject: 'Economics',
            address: '543 Cedar St',
            designation: 'Professor'
        }
    ];

    return (
        <div style={{ marginTop: '4rem' }} className='p-5' >
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Faculty</th>
                        <th>Subject</th>
                        <th>Address</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, index) => (
                        <tr key={index}>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.faculty}</td>
                            <td>{teacher.subject}</td>
                            <td>{teacher.address}</td>
                            <td>{teacher.designation}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TeacherList