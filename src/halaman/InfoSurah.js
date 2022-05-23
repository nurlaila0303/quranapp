import React, { useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Accordion, Card} from "react-bootstrap";
import quran2 from "../foto/quran2.jpg"


const Info=()=> {
    const {id}=useParams()
    const [info, Info]=useState([]);
    const [surah, Surah]= useState([])


    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/chapters/" + id + "/info?language=id")
            .then((res)=>{
                Info(res.data.chapter_info)
            })
            .catch((error)=>{
                console.log(error, 'error handle info')
            })
        axios.get("https://api.quran.com/api/v4/chapters/" + id)
            .then((res)=>{
                Surah(res.data.chapter)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })
    },[id])
    return (
        <div>
            <Card style={{marginTop:"55px"}}>
                <Card.Img variant="top" src={quran2} style={{width:'100%', height:'200px'}}/>
                <Card.Body>
                    <Card.ImgOverlay>
                        <div className=" row justify-content-center align-items-center text-xxl" style={{margin:"50px", fontSize:""}} >
                            <Card.Title className="text-success text-xxl" ><h1 style={{fontFamily:"-moz-initial"}}> Surah  {surah.name_simple}</h1></Card.Title>
                            <h5  ><Link className="text-decoration-none text-danger" to={"/surah/" + surah.id}>Click Read Surah</Link></h5>
                        </div>
                    </Card.ImgOverlay>
                </Card.Body>
            </Card>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Surah Ke-{info.chapter_id}</Accordion.Header>
                    <Accordion.Body>
                        <p className="text-success" dangerouslySetInnerHTML={{__html: info.short_text}}/>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Info Surah</Accordion.Header>
                    <Accordion.Body>
                        <p className="text-start" dangerouslySetInnerHTML={{__html: info.text}}/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Info;