import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Badge, Card, Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import quran2 from "../foto/quran2.jpg"

const Juz=()=>{
    const {id} =useParams()
    const [ayatJuz, setAyatjuz]=useState([]);
    const [artiJuz, setArtiJuz]=useState([]);
    const [audioJuz, setAudioJuz]=useState([]);

    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=" + id)
            .then((res)=>{
                setAyatjuz(res.data.verses)
            })
            .catch((error)=>{
                console.log(error, ' error handle ayat juz')
            })
        axios.get("https://api.quran.com/api/v4/quran/translations/134?juz_number=" +id)
            .then((res)=>{
                setArtiJuz(res.data.translations)
            })
            .catch((error)=>{
                console.log(error, 'error handle arti juz')
            })
        axios.get("https://api.quran.com/api/v4/recitations/7/by_juz/" +id + "?per_page=999999999" )
            .then((res)=>{
                setAudioJuz(res.data.audio_files)
            })
            .catch((error)=>{
                console.log(error, "error handle audio ayat")
            })
    },[id])
    return (
        <>
            <div>
                <Card style={{marginTop:"55px"}}>
                    <Card.Img variant="top" src={quran2} style={{width:'100%', height:'200px'}}/>
                    <Card.Body>
                        <Card.ImgOverlay>
                            <div style={{margin:"50px", fontSize:""}} >
                                <Card.Title ><h1> JUZ {id}</h1></Card.Title>
                            </div>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card>
                {ayatJuz.map((ayatitem, index)=>{
                    return(
                        <Card key={index} className="mt-1">
                            <Card.Body>
                                <Row>
                                    <Col sm={1}>
                                        <Badge bg="success">{ayatitem.verse_key}</Badge>
                                    </Col>
                                    <Col sm={11}>
                                        <p className="text-end fs-1">{ayatitem.text_uthmani}</p>
                                        {artiJuz.length? <p className="text-md-start fst-italic" dangerouslySetInnerHTML={{__html:artiJuz[index].text}} />:null}
                                        {audioJuz.length? <audio  className="h-10 mt-2   text-end float-end" src={"https://verses.quran.com/" + audioJuz[index].url} controls />:null}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </>
    );
}

export default Juz;