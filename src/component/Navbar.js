import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown,Button} from "react-bootstrap";
import logo from "../foto/logoquran.png"
import {Link, NavLink} from "react-router-dom";
import axios from "axios";

const Navbar1 =()=>{
    const [juz, setJuz] = useState([]);
    const [surah, setSurah]=useState([]);


    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/juzs")
            .then((res )=>{
                setJuz(res.data.juzs)

            })
            .catch((error)=>{
                console.log(error, "error handle juz")
            })
        axios.get("https://api.quran.com/api/v4/chapters/")
            .then((res)=>{
                setSurah(res.data.chapters)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })


    },[]);
    return (
        <div>
            <>
                <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="success" variant="dark" style={{height : "50px", }  }>
                    <Container>
                        <Navbar.Brand >
                            <Link to="/" className="text-decoration-none text-light">
                                <img
                                    alt=""
                                    src={logo}
                                    width="100px"
                                    height="100px"

                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link  variant="danger" ><NavLink to="/" className="text-decoration-none text-light">Home</NavLink></Nav.Link>
                                <NavDropdown className="text-white" id="collasible-nav-dropdown"
                                             style={{ maxHeight: "28px" }}
                                             title={"Juz"}>
                                    <div>
                                        {juz.map((item, index)=>(
                                            <NavDropdown.Item  key={index} ><Link to={"/juz/"+ item.id} className="text-decoration-none text-dark">Juz {item.id}</Link></NavDropdown.Item>
                                        ))}
                                    </div>
                                </NavDropdown>
                                <Link className="text-decoration-none text-white" to="/About"> <p style={{marginLeft:"50rem"}}>About Me</p></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
}

export default Navbar1;