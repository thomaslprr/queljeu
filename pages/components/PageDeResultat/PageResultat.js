import React, { useState, useEffect } from 'react';
import {Container, Pagination} from "semantic-ui-react";
import axios from "axios";
import Cartes from "./Cartes";


const proxyCORS = "https://contre-cors.herokuapp.com/";
const userKey = '634b219991f28ec8c656387de180af49';

const PageResultat = ({req}) => {
    const [requete] = useState(req);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios({
                url: ""+proxyCORS+"https://api-v3.igdb.com/games",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'user-key': userKey
                },
                data: requete+"limit 200;"
            });
            setPosts(res.data);
            console.log(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);

        //remonter en haut de page après chaque changement de page (transition progressive)
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <Container textAlign='center'>

            <h1>Résultats </h1>

            <Cartes cartes={currentPosts} loading={loading} />

            <Pagination
                defaultActivePage={currentPage}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={Math.ceil(posts.length / postsPerPage)}
                onPageChange={(event,data)=>paginate(data.activePage)}
            />

        </Container>
    );
};

export default PageResultat;



