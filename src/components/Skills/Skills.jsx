import styles from './Skills.module.css';
import { SkillList } from './SkillList';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';

export const Skills = () => {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="Javascript" />
                <SkillList src={checkMarkIcon} skill="ReactJS" />
                <SkillList src={checkMarkIcon} skill="TailwindCSS" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Node" />
                <SkillList src={checkMarkIcon} skill="ExpressJS" />
                <SkillList src={checkMarkIcon} skill="JQuery" />
                <SkillList src={checkMarkIcon} skill="RESTful API" />
                <SkillList src={checkMarkIcon} skill="JSON" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="COBOL" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="MongoDB" />
                <SkillList src={checkMarkIcon} skill="DB2" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="JIRA" />
            </div>
        </section>
    );
};
