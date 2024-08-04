import styles from './HeroStyles.module.css';
import heroImage from '../../assets/profile_pic.png';
import mailLightIcon from '../../assets/email-light.svg';
import mailDarkIcon from '../../assets/emai-dark.svg';
import githubLightIcon from '../../assets/github-light.svg';
import githubDarkIcon from '../../assets/github-dark.svg';
import linkedinLightIcon from '../../assets/linkedin-light.svg';
import linkedinDarkIcon from '../../assets/linkedin-dark.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

export const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const mailIcon = theme === 'light' ? mailLightIcon : mailDarkIcon;
    const githubIcon = theme === 'light' ? githubLightIcon : githubDarkIcon;
    const linkedinIcon = theme === 'light' ? linkedinLightIcon : linkedinDarkIcon;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImage} alt="Profile Picture of Tram Pham" />
                <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>Pham Hoang
                    <br />
                    Nguyet Tram
                </h1>
                <h2>Full Stack Developer</h2>
                <span>
                    <a href="mailto:nguyettram10@gmail.com" target='_blank'>
                        <img src={mailIcon} alt="Mail Icon" />
                    </a>
                    <a href="https://github.com/phntram/porfolio" target='_blank'>
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/tram-pham-tp1010/" target='_blank'>
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                </span>

                <p className={styles.description}>
                    With a passion for developing modern dynamic and responsive web applications.
                </p>
                <a href={CV} download={true}>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section >
    );
};
