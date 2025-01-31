import React, {useState} from "react";
import "./Film.css";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import ButtonMod from "./ButtonMod";
import CommentModal from "./CommentModal"; // ✅ Modal pour les commentaires
import DescriptionModal from "./DescriptionModal"; // ✅ Modal pour la description complète

function Film(props) {
    const [commentModalVisible, setCommentModalVisible] = useState(false);
    const [descModalVisible, setDescModalVisible] = useState(false);

    const movie = props.object;
    const maxLines = 6; // ✅ Nombre maximal de lignes avant d'afficher "..."

    const likeMovie = () => {
        fetch(`http://localhost:3005/api/like/${movie.id}`, {method: "PUT"})
            .then((res) => res.json())
            .then((json) => {
                movie.nb_likes = json.nb_likes;
            });
    };

    return (
        <Grid item key={movie.original_title} xs={12} sm={6}>
            <Card style={{height: "55rem", overflow: "hidden", backgroundColor: "darkgrey"}}>
                <CardHeader
                    title={movie.original_title}
                    subheader={"Nombre de likes : " + movie.nb_likes}
                    titleTypographyProps={{align: "center", color: "white"}}
                    action={
                        <button id="like-button">
                            <FavoriteBorderIcon onClick={likeMovie}/>
                        </button>
                    }
                    subheaderTypographyProps={{
                        align: "center",
                        color: "whitesmoke",
                    }}
                />
                <CardContent>
                    <div className="commentSection">
                        <ButtonMod idMovie={movie.id}/>
                    </div>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "baseline", mb: 2}}>
                        <Typography component="h2" variant="h3" color="text.primary">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Not found"/>
                        </Typography>
                    </Box>

                    {/* ✅ Limitation de la description avec 6 lignes max */}
                    <Typography variant="subtitle1" align="center" textAlign={"justify"} className="limited-text">
                        <span className="text-content">{movie.overview}</span>
                        {movie.overview.length > 300 && (
                            <span className="see-more" onClick={() => setDescModalVisible(true)}>
                                Voir plus
                            </span>
                        )}
                    </Typography>


                    <br/>
                    <br/>
                    <br/>

                    {/* ✅ Ajout du lien "Voir les commentaires" */}
                    <Typography
                        variant="subtitle2"
                        align="center"
                        color="blue"
                        style={{cursor: "pointer", textDecoration: "underline", marginTop: "10px"}}
                        onClick={() => setCommentModalVisible(true)}
                    >
                        Voir les commentaires
                    </Typography>
                </CardContent>
            </Card>

            {/* ✅ Modal pour afficher la description complète */}
            <DescriptionModal
                visible={descModalVisible}
                description={movie.overview}
                onClose={() => setDescModalVisible(false)}
            />

            {/* ✅ Modal pour les commentaires */}
            <CommentModal
                idMovie={movie.id}
                visible={commentModalVisible}
                onClose={() => setCommentModalVisible(false)}
            />
        </Grid>
    );
}

export default Film;
