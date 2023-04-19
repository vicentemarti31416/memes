export default function Gallery ({ memes, estilos }) {

    return (
        <div className="gallery__container row">

            {
                memes.map((meme) => (
                    <div key={meme.id} className="col-sm-3" style={{position: "relative"}}>
                        <img src={meme.url}></img>
                        <h2 style={{position: "absolute", top: estilos.topY + "px", left: estilos.topX + "px"}}>{estilos.topText}</h2>
                        <h2 style={{position: "absolute", top: estilos.bottomY + "px", right: estilos.bottomX + "px"}}>{estilos.bottomText}</h2>
                    </div>
                ))
            }
        </div>
    );
}
