import React, { useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import quran2 from "../foto/quran2.jpg"
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Surah=()=> {
    const {id} = useParams();
    const [Surah, NamaSurah] = useState([]);
    const [ayat, Ayat]= useState([]);
    const [arti, Arti]=useState([]);
    const [audioAyat, AudioAyat]= useState([]);
    const [audioSurah, AudioSurah]=useState([]);

    useEffect(() => {
        axios.get("https://api.quran.com/api/v4/chapters/" + id)
            .then((res) => {
                NamaSurah(res.data.chapter)
                // console.log(res.data.chapter)
            })
            .catch((error) => {
                console.log(error, 'error handle nama surah')
            })
        axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" + id)
            .then((res)=>{
                Ayat(res.data.verses)
            })
            .catch((error)=>{
                console.log(error, 'error handle ayat surah')
            })
        axios.get("https://api.quran.com/api/v4/quran/translations/134?chapter_number=" +id)
            .then((res)=>{
                Arti(res.data.translations)
            })
            .catch((error)=>{
                console.log(error, 'error handle arti surah')
            })
        axios.get("https://api.quran.com/api/v4/quran/recitations/7?chapter_number=" +id)
            .then((res)=>{
                AudioAyat(res.data.audio_files)
            })
            .catch((error)=>{
                console.log(error, "error handle audio ayat")
            })
        axios.get("https://api.quran.com/api/v4/chapter_recitations/7/" +id)
            .then((res)=>{
                AudioSurah(res.data.audio_file)
            })
            .catch((error)=>{
                console.log(error, "error handle audio ayat")
            })
    },[id])
    return (
        <>
            <Container>
                <Card style={{marginTop:"55px"}}>
                    <Card.Img variant="top" src={quran2} style={{width:'100%', height:'200px'}}/>
                    <Card.Body>
                        <Card.ImgOverlay>
                            <div style={{margin:"50px", fontSize:""}} >
                                <Card.Title ><h1> Surah {Surah.name_simple}</h1></Card.Title>
                                <h5 > <Link className="text-decoration-none text-danger" to={"/info/" + Surah.id}>Click Info surah</Link></h5>
                            </div>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card>
                <Container style={{background:"greenyellow"}}>
                    <h5 style={{color:"green", marginRight:"940px", fontSize:"20px", fontFamily:"-moz-initial"}}>Dengarkan Surah</h5>
                    <audio style={{marginRight:"900px"}} src={audioSurah.audio_url} controls />
                </Container>
                {ayat.map((ayatitem, index)=>{
                    return(
                        <Card key={index} className="mt-1">
                            <Card.Body>
                                <Row>
                                    <Col sm={1}>
                                        <span className="badge bg-success">{ayatitem.verse_key}</span>
                                    </Col>
                                    <Col sm={11}>
                                        <p className="text-end fs-1">{ayatitem.text_uthmani}</p>
                                        {arti.length? <p className="text-md-start fst-italic" dangerouslySetInnerHTML={{__html:arti[index].text}} />:null}
                                        {audioAyat.length? <audio  className="h-10 mt-2   text-end float-end" src={"https://verses.quran.com/" + audioAyat[index].url} controls color="primary" />:null}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>
        </>
    );

}

export default Surah;