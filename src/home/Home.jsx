import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Gallery from "../gallery/Gallery";
import { HomeContext } from "../shared/HomeContext";
import Form from "../form/Form";

export default function Home() {

    const [memes, setMemes] = useState([]);
    const { estilos } = useContext(HomeContext);

    useEffect(() => {
        axios
            .get('https://api.imgflip.com/get_memes')
            .then((response) => setMemes(response.data.data.memes))
            .then(() => console.log(memes))
            .catch((error) => console.log(error));
    }, [])   

    return (
        <div>
            <Form />
            <Gallery memes={memes} estilos={estilos} />
        </div>
    );
}

