import {Button, Card} from "react-bootstrap";
import foto from "../foto/foto.jpeg"


const About =()=>{
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    <p style={{fontSize: "5rem", fontFamily: "monospace", marginTop: "100px"}}>MY PROFILE</p>
                </div>

                <div className="container" >
                    <div className="row align-items-start">
                        <div className="col" style={{background:"green", height:"300px", marginTop:"90px"}}>
                            <p style={{fontSize:"20px", fontFamily:"fantasy", marginRight :"30px",marginTop:"100px", color:"greenyellow"}}>I'm Nur Laila</p>
                            <p style={{fontSize:"15px", fontFamily:"serif", marginRight :"3rem",marginTop:"1px",color:"white"}}> My friends often call me laila, I am a student at Sultan Syarif Kasim Riau majoring in Informatics Engineering, are you interested in studying at my university, there we can learn religious studies too, very fun</p>
                        </div>
                        <div className="col" >
                            <img src={foto}style={{marginLeft:"60px", height:"360px", marginTop:"50px"}}/>
                        </div>
                    </div>
                </div>

            </div>
            <Card className="bg-dark text-white" style={{marginTop:"100px"}}>
                <Card.Text>
                    I am a 4th semester student, who studies tirelessly, trying to survive in the midst of courses that are difficult for me to understand,
                    I like design, I am studying design, and I like landscape photos
                </Card.Text>
                <Card.Text>Cheers for all of us!!!</Card.Text>
            </Card>
        </div>
    )

}
export default About;