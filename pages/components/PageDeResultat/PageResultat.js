import React, { useState, useEffect } from 'react';
import {Container} from "semantic-ui-react";
import axios from "axios";
import Cartes from "./Cartes";
import {Pagination} from "semantic-ui-react";


const proxyCORS = "https://contre-cors.herokuapp.com/";
const userKey = '634b219991f28ec8c656387de180af49';

const PageResultat = ({req}) => {
    const [requete] = useState(req);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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
                data: requete+"limit 500;"
            });
            setPosts(res.data);
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
        console.log("appuie sur la page : "+pageNumber);
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



