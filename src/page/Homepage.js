import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import pic1 from "../components/image/NewQuiz.jpg"
import pic2 from "../components/image/MyQuiz.jpg"
import pic3 from "../components/image/PlayQuiz.jpg"
import { Link } from "react-router-dom";
const Homepage = () => {
    return (
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop:"100px"}}>
                <Card sx={{ maxWidth: 350, marginTop: "20px", borderRadius: "20px" }} component={Link} to={"/create_new"}>
                    <CardActionArea>
                        <CardMedia component="img" height="200" image={pic1} alt="new quiz" />
                        <CardContent>
                            <Typography variant="h6" sx={{ textAlign: "center" }}>
                                Create your quiz
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 350, marginTop: "20px", borderRadius: "20px", width: 350 }} component={Link} to={"/myquiz"} >
                    <CardActionArea>
                        <CardMedia component="img" height="200" image={pic2} alt="my quiz" />
                        <CardContent>
                            <Typography variant="h6" sx={{ textAlign: "center" }}>
                                See your quiz
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 350, marginTop: "20px", borderRadius: "20px" }} component={Link} to={"/playquiz"} >
                    <CardActionArea>
                        <CardMedia component="img" height="200" image={pic3} alt="play quiz" />
                        <CardContent>
                            <Typography variant="h6" sx={{ textAlign: "center" }}>
                                Start play your quiz
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
    )
}
export default Homepage;