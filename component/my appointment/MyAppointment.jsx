import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { Button, Table } from 'react-bootstrap';

const MyAppointment = () => {
    const [auth, setAuth] = useAuth();
    const [list, setList] = useState([]);
    const router = useRouter();

    console.log(auth?._id)

    useEffect(() => {
        const fetchInvoiceData = async () => {
            try {

                const response = await axios.get(`http://localhost:4024/api/v1/appointment/view/student/${auth?._id}`);
                setList(response?.data);
                console.log(response?.data)
            } catch (error) {
                // toast.error("Something went wrong");
            }
        };

        fetchInvoiceData();
    }, [router.query.id]);

    console.log(list?.data?.teacherId)


    

    return (
        <div style={{ marginTop: '4rem', padding: '30px' }}>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <strong>Teacher Name</strong>
                        </th>
                        <th>
                            <strong>Department</strong>
                        </th>
                        <th>
                            <strong>Slot</strong>
                        </th>
                        <th>
                            <strong>Reason</strong>
                        </th>
                        <th>
                            <strong>Actions</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.data?.map((item) => (
                            <tr key={item?._id}>
                                <td>{item?.teacherName}</td>
                                <td>{item?.teacherDepartmentName}</td>
                                <td>{item?.slot}</td>
                                <td>{item?.reason}</td>
                                <td>
                                    {item?.isApprovedByTeacher ? <>
                                        <h3>Approved</h3>
                                    </> : <>
                                        {item?.isRejectedByTeacher ? <>
                                            <h3>Rejected</h3>
                                        </> : <>
                                            <h3>Pending</h3>
                                        </>}
                                    </>}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default MyAppointment