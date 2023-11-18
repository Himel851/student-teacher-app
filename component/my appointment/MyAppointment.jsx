import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "next/router";
import { Button, Container, Table } from "react-bootstrap";

const MyAppointment = () => {
  const [auth, setAuth] = useAuth();
  const [list, setList] = useState([]);
  const router = useRouter();

  console.log(auth?._id);

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4024/api/v1/appointment/view/student/${auth?._id}`
        );
        setList(response?.data);
        console.log(response?.data);
      } catch (error) {
        // toast.error("Something went wrong");
      }
    };

    fetchInvoiceData();
  }, [router.query.id]);

  return (
    <div style={{ marginTop: "4rem", padding: "30px" }}>
      <Container>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>
                <strong>Slot</strong>
              </th>
              <th>
                <strong>Reason</strong>
              </th>
              <th>
                <strong>Status</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {list?.data?.map((item) => (
              <tr key={item?._id}>
                <td>{item?.slot}</td>
                <td>{item?.reason}</td>
                <td>
                  {item?.isApprovedByTeacher ? (
                    <span className="text-success fw-bold">Approved</span>
                  ) : item?.isRejectedByTeacher ? (
                    <span className="text-danger fw-bold">Rejected</span>
                  ) : (
                    <span className="text-success fw-bold">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MyAppointment;
