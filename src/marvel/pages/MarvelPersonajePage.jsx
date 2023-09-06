import { useDispatch, useSelector } from 'react-redux';
import { getMarvelPersonaje } from '../../store/marvel/thunks';
import { useForm } from '../../hooks/useForm';
import { LoadingChecking } from '../../components/loading/LoadingChecking';
import { useEffect } from 'react';
import '../styles/MarvelPersonajePage.css';
import { setItemsListas } from '../../store/marvel/marvelListasSlice';
import { useNavigate } from 'react-router-dom';

export const MarvelPersonajePage = () => {
    const dispatch = useDispatch();
    const { loading, dataMarvel, error } = useSelector(state => state.marvel);

    const navigate = useNavigate();

    const { personaje, onInputChange } = useForm({
        personaje: ''
    });

    const onSearch = (event) => {
        event.preventDefault();
        dispatch(getMarvelPersonaje(personaje));
    };

    const setDataListas = (id) => {
        const { comics, thumbnail, name } = [...dataMarvel].filter((item) => item.id === id)[0];
        dispatch(setItemsListas({ comics: comics.items, name, thumbnail }));
        navigate("/marvel/personajes/detalles");
    };

    useEffect(() => {
        dispatch(getMarvelPersonaje());
    }, []);

    if (loading) return <LoadingChecking />

    return (
        <>
            <div className='contenedor-marvel'>
                <form onSubmit={onSearch}>
                    <input
                        type="text"
                        name='personaje'
                        placeholder='Hulk, Thor, Spider Man...'
                        value={personaje}
                        onChange={onInputChange}
                    />

                    <button
                        onClick={onSearch}
                        type="submit">
                        Buscar
                    </button>
                </form>
            </div>

            {
                error !== '' && error !== null && (
                    <div className='contenedor-marvel'>
                        <small>{error}</small>
                    </div>
                )
            }

            <div className='grid'>
                {
                    dataMarvel.map(data => {
                        return <div key={data.id} className='grid__item'>
                            <div className="card">
                                <img
                                    src={data.thumbnail.path + '.' + data.thumbnail.extension}
                                    alt={data.name}
                                    onClick={() => setDataListas(data.id)}
                                    className='card__img'
                                />
                            </div>
                        </div>
                    })
                }
            </div>

            {
                dataMarvel.length > 0 && (
                    <div className='contenedor-marvel'>
                        <small>Data provided by Marvel. © 2023 MARVEL</small>
                    </div>
                )
            }
        </>
    );
};