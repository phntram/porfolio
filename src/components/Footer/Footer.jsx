import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <section id='footer' className={styles.container}>
            <p>
                &copy; 2024 Pham Hoang Nguyet Tram. <br />
                All rights reserved.
            </p>
        </section>
    );
};
