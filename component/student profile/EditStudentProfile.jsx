import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditStudentProfile = () => {
  const [profile, setProfile] = useState({
    id: '',
    name: '',
    department: '',
    phone: '',
    profilePic: '',
  });
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    if (id) {
      fetchProfileData();
    }
  }, [id]);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`http://localhost:4024/api/v1/student/view-profile/${id}`);
      const { _id, ...profileData } = response.data?.data; // Destructure the response data and exclude the _id field
      setProfile({ ...profileData, id: _id }); // Set the id field separately
      console.log(profileData);
    } catch (error) {
      console.log('Error fetching profile data:', error);
    }
  };


  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'profilePic') {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: reader.result
        }));
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile();
  };

  const updateProfile = async () => {
    try {
      console.log(profile);
      const response = await axios.post(`http://localhost:4024/api/v1/student/update-profile`,
        profile);
      toast.success("Update Successful");
      router.push(`/my-profile`);
      // You can show a success message or redirect to the doctor's profile page
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  return (
    <div style={{ margin: '5rem 40vh' }}>
      <Form onSubmit={handleSubmit}>

        <div className='d-flex  gap-4'>
          <Form.Group controlId="name" className='d-flex  gap-3 '>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={profile?.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="phone" className='d-flex gap-3 '>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              value={profile?.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div className='d-flex  gap-4'>
          <Form.Group controlId="email" className='d-flex gap-3 mt-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={profile?.email}
              onChange={handleInputChange}
              disabled
            />
          </Form.Group>
        </div>
        <div className='d-flex  gap-4'>
          <Form.Group controlId="age" className='d-flex gap-3 mt-3'>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={profile?.age}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>


        <Form.Group controlId="profilePic" className='d-flex gap-3 mt-3'>
          <Form.Label>Profile Image</Form.Label>
          <input
            type="file"
            name="profilePic"
            onChange={handleInputChange}
          />
        </Form.Group>
        <div>
          {profile?.profilePic && (
            <img src={profile?.profilePic} alt="Profile" style={{ width: '200px', marginTop: '10px' }} />
          )}
          <div>
            <Button variant="success" type="submit" className="mt-4">
              Update Profile
            </Button>
            <Link href={`/my-profile`}>
              <Button variant="success" type="submit" className="mt-4 mx-3">
                Back
              </Button>
            </Link>
          </div>
        </div>



        {/* <Form.Group controlId="specialty" className='d-flex gap-3 mt-3'>
                    <Form.Label>Specialty</Form.Label>
                    <Form.Control
                        type="text"
                        name="specialty"
                        value={profile.specialty}
                        onChange={handleInputChange}
                    />
                </Form.Group> */}



        {/* Add more form fields for other profile properties */}


      </Form>
    </div>
  )
}

export default EditStudentProfile