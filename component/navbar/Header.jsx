import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/router';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import { toast } from 'react-toastify';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setAuth(null);
        router.push('/');
        toast.success('Logout Successful');
    };

    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container >
                    <Navbar.Brand>
                        <Link href="/">
                            
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: 'auto' }} navbarScroll>
                            {auth?.role === 'admin' && (
                                <>
                                    <Link href="/dashboard" className="text-dark nav-link arrow-none fw-bold">
                                        Dashboard
                                    </Link>
                                    <Link href="/teacher-list" className="text-dark nav-link arrow-none fw-bold">
                                        Teachers List
                                    </Link>
                                    {/* <Link href="/student-list" className="text-dark nav-link arrow-none fw-bold">Student's List</Link> */}
                                    <Link href="/pending-teacher" className="text-dark nav-link arrow-none fw-bold">
                                        Pending List
                                    </Link>
                                    <Link href="/approve-teacher" className="text-dark nav-link arrow-none fw-bold">
                                        Approved List
                                    </Link>
                                    <Link href="/rejected-teacher" className="text-dark nav-link arrow-none fw-bold">
                                        Rejected List
                                    </Link>
                                </>
                            )}
                            {auth?.role === 'student' && (
                                <>
                                    <Link href="/teacher-list" className="text-dark nav-link arrow-none fw-bold">
                                        Teacher List
                                    </Link>
                                    <Link href={`/my-appointment/${auth?._id}`} className="text-dark nav-link arrow-none fw-bold">
                                        My Appointment
                                    </Link>
                                </>
                            )}
                            {auth?.role === 'teacher' && (
                                <>
                                    <Link href={`/appointment-list/${auth?._id}`} className="text-dark nav-link arrow-none fw-bold">
                                        Appointment List
                                    </Link>
                                    <Link href={`/teacher-profile/${auth?._id}`} className="text-dark nav-link arrow-none fw-bold">
                                        Profile
                                    </Link>
                                </>
                            )}
                        </Nav>
                        <div className="d-flex align-items-center">
                            {auth?.role === 'student' && (
                                <Link href="/my-profile" className="text-dark nav-link arrow-none fw-bold mx-3 mt-1">
                                    My Profile
                                </Link>
                            )}
                            <Link href="/location" className="text-dark nav-link arrow-none fw-bold mx-3 mt-1">
                                Map
                            </Link>

                            <Dropdown className='mx-4' data-bs-theme="dark">
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Notice
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {auth?.role === 'teacher' && (
                                        <Dropdown.Item as={Link} href="/notice">
                                            Create
                                        </Dropdown.Item>
                                    )}
                                    {auth?.role === 'admin' && (
                                        <Dropdown.Item as={Link} href="/notice">
                                            Create
                                        </Dropdown.Item>
                                    )}
                                    <Dropdown.Item as={Link} href="/view">
                                        View
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button variant="danger" onClick={handleLogout} className="ml-3">
                                Logout
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
