import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";

export function App(){
    return <div>
        <header>
            <h1 className={styles.title}>Peliculas</h1>
        </header>
        <main>
            <MoviesGrid />
        </main>
    </div>;
}