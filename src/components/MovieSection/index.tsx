import styles from './Moviesection.module.css';
import Fieldset from "../../FildSet";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies';


const MovieSection = () => {
 const { movies, error, isLoading } = useFetchMovies();
 const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary"> 
          <InputText value={searchTerm} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} 
          placeholder="Buscar Filmes" />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em Cartaz</h1>
        {isLoading && <p>Carregando Filmes...</p>}
        { error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
