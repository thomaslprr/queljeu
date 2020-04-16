import React, {useState,useEffect} from 'react';

const UnixToDate = ({unix,langue}) => {

    const monthNamesEn = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthNamesFr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const [date,setDate] = useState("Chargement...");

    useEffect(()=>{
        transcrireDate();
    })

    const transcrireDate = () => {

        if(unix=="" || !unix || unix==undefined){
            setDate("");
            return
        }

        const time_to_show = unix;// unix timestamp in seconds
        const t = new Date(time_to_show * 1000);

        let moisEnString = monthNamesFr[t.getMonth()];;

        if(langue && langue=="en"){

             moisEnString = monthNamesEn[t.getMonth()];

        }

        const formatted = moisEnString + " " + t.getFullYear();

        setDate(formatted);

    }





        return <div>{date}</div>


}
export default  UnixToDate;
