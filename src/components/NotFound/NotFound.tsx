import PageNotFound from '../../assets/pageNotFound.svg'
import styles from './NotFound.module.css'

export const NotFound = () => {
    return (
        <section>
            <img className={styles.imgNotFound} src={PageNotFound} alt='Page not found' />
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </section>
    );
};
