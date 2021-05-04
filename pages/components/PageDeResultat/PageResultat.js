import React, { useState, useEffect } from 'react';
import {Container, Icon, Pagination} from "semantic-ui-react";
import axios from "axios";
import Cartes from "./Cartes";

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
                url: ""+process.env.corsLink+"https://api.igdb.com/v4/games",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'x-requested-with': 'XMLHTTPREQUEST',
                    'Client-ID': process.env.ClientID,
                    'Authorization': process.env.Authorization
                },
                data: requete+"limit 200;"
            });
            //console.log(res.data);
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

        //remonter en haut de page après chaque changement de page (transition progressive)
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }


    let pagination;
    if(!loading){
         pagination= <div><br/><Pagination
            defaultActivePage={currentPage}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={Math.ceil(posts.length / postsPerPage)}
            onPageChange={(event,data)=>paginate(data.activePage)}
        />
         </div>;
    }

    if(loading){
        return  <Icon loading name='game' size='massive' color='blue'/>;
    }else{
        return (
            <Container textAlign='center'>

                <h1>Résultats </h1>

                <Cartes cartes={currentPosts} loading={loading} />

                {pagination}

            </Container>
        );
    }


};

export default PageResultat;



