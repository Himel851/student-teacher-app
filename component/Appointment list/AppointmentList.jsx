import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";

export default function AppointmentList() {
  const [list, setList] = useState({});
  const router = useRouter();
  const { id } = router?.query;
  console.log(id)
  useEffect(() => {
    if (id) {
      // Fetch the doctor's details based on the doctorId
      axios.get(`http://localhost:4024/api/v1/appointment/view/teacher/${id}`)
        .then(response => {
          setList(response.data?.data);
          console.log(response.data?.data);
        })
        .catch(error => {
          console.error('Error fetching doctor details:', error);
        });
    }
  }, [id]);
  return (
    <Container className="py-5" style={{ marginTop: '4rem' }}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>
              <strong>Student Name</strong>
            </th>
            <th>
              <strong>Approve</strong>
            </th>
            <th>
              <strong>Not Approve</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Domain customization</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <X className="text-danger" />
            </td>
          </tr>
          <tr>
            <td>FTP</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <Check className="text-success" />
            </td>
          </tr>
          <tr>
            <td>Database</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <X className="text-danger" />
            </td>
          </tr>
          <tr>
            <td>Support</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <Check className="text-success" />
            </td>
          </tr>
          <tr>
            <td>Backups</td>
            <td>
              <Check className="text-success" />
            </td>
            <td>
              <X className="text-danger" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}


