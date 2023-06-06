import React from 'react'
import Link from 'next/link';
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';



const Header = () => {
    const [auth, setAuth] = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('auth'); // Remove the authentication data from local storage
        setAuth(null); // Reset the authentication state
        router.push('/');
    }
    console.log(auth?.role)



    return (
        <div>
             
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container >
                    <Navbar.Brand>
                        <Link href='/' >
                            {/* <Image
                            src='/image/logo.svg'
                            alt='Demo'
                            width={200}
                            height={70} /> */}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: 'auto' }}
                            navbarScroll
                        >
                            <Link href="/dashboard" className="text-dark nav-link arrow-none fw-bold" >Dashboard</Link>
                            <Link href="/teacher-list" className="text-dark nav-link arrow-none fw-bold" >Teacher's List</Link>
                            <Link href="/student-list" className="text-dark nav-link arrow-none fw-bold" >Student's List</Link>
                            <Link href="/create-appointment" className="text-dark nav-link arrow-none fw-bold" >Create Appointment</Link>
                            <Link href="/appointment-list" className="text-dark nav-link arrow-none fw-bold" >Appointment List</Link>
                            {/* <Link href="/patient-profile" className="text-dark nav-link arrow-none fw-bold" >Profile</Link> */}
                        </Nav>
                        <div className="d-flex">
                            {/* <Link href="/dashboard">
                                <Button variant="success" className="me-2">
                                    Dashboard
                                </Button>
                            </Link> */}
                            <Button variant="danger" onClick={handleLogout}>Logout</Button>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}


export default Header