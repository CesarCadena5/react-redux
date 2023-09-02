import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getImages } from "../../store/images/thunks";
import { LoadingChecking } from "../../components/loading/LoadingChecking";
import { Error } from "../../components/error/Error";

import '../styles/ImagesPages.css';


export const ImagesPages = () => {
    const dispatch = useDispatch();
    const { loading, imagenes, error, pagina } = useSelector(state => state.imagenes);

    useEffect(() => {
        dispatch(getImages());
    }, []);

    const siguientesDiez = () => {
        dispatch(getImages(pagina));
    }

    if (loading) return <LoadingChecking />
    if (error !== null) return <Error mensaje={error} />

    return (
        <>

            <div className="grid">
                {
                    imagenes.map((imagen) => {

                        return <div className="grid__item" key={imagen.id}>
                            <div className="card">
                                <img className="card__img" src={imagen.urls.small} alt={imagen.alt_description} />
                            </div>
                        </div>

                    })
                }

            </div>
            <div className="btn-contenedor">
                <button onClick={siguientesDiez}>Siguientes Imagenes</button>
            </div>
        </>
    );
}