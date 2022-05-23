import React, { useEffect,useState} from 'react';
import {Card, Container, ListGroup, Row, Col, Button, Badge} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import quran2 from "../foto/quran2.jpg"
import quran from "../foto/quran.png"

const Home=()=> {
    const [surah, setSurah]= useState([])

    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/chapters?language=id" )
            .then((res)=>{
                setSurah(res.data.chapters)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })
    },[])
    return (
        <div>
            <Card style={{marginTop:"55px"}}>
                <Card.Img variant="top" src={quran2} style={{width:'100%', height:'300px'}}/>
                <Card.Body>
                    <Card.ImgOverlay>
                        <Card.Img variant="top" src={quran} style={{width:"200px", marginTop:"30px"}}/>
                        <Card.Text >
                            <p style={{fontFamily:"-moz-initial", fontSize:"23px"}}>Selamat datang di Quranku</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card.Body>
                    <Container fluid>
                        <div className="mt-3 ">
                            <h1 style={{color:"green", fontFamily:"-moz-initial"}}>Daftar Surah:</h1>
                        </div>
                        <center>
                        <div style={{margin:"auto", marginLeft:"20px"}} >
                            {surah.map((surahitem, index)=> (
                                <div key={index} style={{marginLeft:"3px"}}>
                                    <div >
                                        <Container>
                                            <Card className="text-center">
                                                <Card.Header>
                                                    <Badge>{surahitem.id} </Badge>
                                                    {surahitem.name_simple} {surahitem.name_arabic}
                                                </Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{surahitem.translated_name.name} </Card.Title>
                                                    <Card.Text>
                                                        <strong>Berjumlah {surahitem.verses_count} ayat</strong>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Diturunkan di {surahitem.revelation_place} </strong>
                                                    </Card.Text>
                                                    <Link to={"/surah/" + surahitem.id}><Button variant="primary">Lihat Surah</Button></Link>
                                                </Card.Body>
                                                <Card.Footer ><Link to={"/info/" + surahitem.id} ><p style={{color:"red", fontFamily:"initial"}}>Info Surah  </p></Link></Card.Footer>
                                            </Card>
                                        </Container>


                                    </div>
                                </div>
                                ))}
                        </div>
                        </center>
                    </Container>
                </Card>
        </div>
    );

}

export default Home;