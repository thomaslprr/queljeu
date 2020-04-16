import {useEffect,useState} from "react";
import {Container} from "semantic-ui-react";

const LinkList = ({website}) => {

    const [txt,setTxt] = useState(null);
    const [lienValable] = useState([1,3,4,5,6,8,9,13,16]);
    const [liens,setLiens] = useState([]);

    useEffect(()=>{


        ajouterLienPresent();
        afficherBoutons();


    },[]);

    const donneeLien = (val) => {

        const tab = [{id:1, txt: "Site officiel", color:"teal", icon:"globe"},
                    {id:3, txt: "Wikipédia", color:"black", icon:"wikipedia w"},
                    {id:4, txt: "Facebook", color:"facebook", icon:"facebook"},
                    {id:5, txt: "Twitter", color:"twitter", icon:"twitter"},
                    {id:6, txt: "Twitch", color:"violet", icon:"twitch"},
                    {id:8, txt: "Instagram", color:"instagram", icon:"instagram"},
                    {id:9, txt: "Youtube", color:"youtube", icon:"youtube"},
                    {id:13, txt: "Steam", color:"grey", icon:"steam"},
                    {id:16, txt: "EpicGames", color:"orange", icon:"chess knight"}
                    ];

        for(let i = 0; i< tab.length ; i++){
            if(tab[i].id ==val){
                return tab[i];
            }
        }

    };

    const ajouterLienPresent = () => {

        for(let i =0;i< website.length ; i++){
            if(lienValable.includes(website[i].category)){
                let num = website[i].category;
                let val = {id: num,color: donneeLien(num).color, text: donneeLien(num).txt, logo: donneeLien(num).icon, url:website[i].url };
                let liste = liens;
                liste.push(val);
                setLiens(liste);
            }
        }



    }



    const afficherBoutons = () => {
        if (website){
            const val = liens.map(({id, color,text,logo,url})=>


                <a key={id} className={'ui '+color+' button circular'} href={url} target="_blank" style={{margin: 10+'px'}}>
                    <i className={logo+' icon'}></i>
                    {text}
                </a>

            );

            setTxt(val);


        }
    }


    if(website!=-1){
        return  <Container textAlign='center'>{txt}</Container>
    }else{
        return <div>Error</div>
    }


}

export default LinkList
