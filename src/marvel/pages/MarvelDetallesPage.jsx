import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LoadingChecking } from "../../components/loading/LoadingChecking";
import '../styles/MarvelDetallesPage.css';
import { useNavigate } from "react-router-dom";

export const MarvelDetallesPage = () => {

    const { comics, nombre, thumbnail } = useSelector(state => state.marvelListas);
    const navigate = useNavigate();

    const [objDetalles, setObjDetalles] = useState({
        comicsData: []
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerDatosDetalles();
    }, []);

    const obtenerDatosDetalles = async () => {
        setLoading(true);
        const comicsData = await Promise.all(comics.map(el => getData(el.resourceURI)));

        setObjDetalles({
            comicsData: comicsData
        });

        setLoading(false);
    };

    const getData = async (url) => {
        const resp = await fetch(`${url}?ts=1000&apikey=${import.meta.env.VITE_API_KEY_MARVEL}&hash=${import.meta.env.VITE_API_KEY_HASH}`);
        const { data } = await resp.json();

        return data.results[0];
    };

    const regresarInicio = () => {
        navigate("/marvel/personajes");
    };

    if (loading) {
        return <LoadingChecking />
    }

    return (
        <>
            <div className="contenedor-detalles">
                <div className="imagen">
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={nombre} />
                    <h3>{nombre}</h3>
                    <button onClick={regresarInicio}>
                        Regresar
                    </button>
                    <small>Data provided by Marvel. © 2023 MARVEL</small>
                </div>

                <div className="informacion-comics">
                    {
                        objDetalles.comicsData.map(comic => {
                            return <div key={comic.id} className="item-informacion">
                                <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title} />
                                <h4>Titulo: {comic.title}</h4>
                                <h5>Páginas: {comic.pageCount}</h5>
                                <h5>Fecha venta: {comic.dates[0].date.substring(0, 10)}</h5>
                                <h5>Tipo: {comic.format}</h5>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    );
};