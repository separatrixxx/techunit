import styles from './AboutBlock.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../Common/Htag/Htag'
import { setLocale } from '../../helpers/locale.helper';
import ReactMarkdown from 'react-markdown';
import { TeamBlock } from '../TeamComponents/TeamBlock/TeamBlock';


export const AboutBlock = (): JSX.Element => {
    const router = useRouter();

    const text = "TechUnit is at the forefront of technological innovation, bringing cutting-edge solutions to businesses and consumers alike. Our commitment to excellence and passion for technology drives us to create products that shape the future.\n\nWith a diverse portfolio of brands and a team of expert professionals, we're dedicated to pushing the boundaries of what's possible in the tech world.";
    
    return (
        <div id="about" className={styles.aboutBlock}>
            <Htag tag='xl' className={styles.aboutTitle}>
                {setLocale(router.locale).about_us}
            </Htag>
            <ReactMarkdown>
                {text}
            </ReactMarkdown>
            <TeamBlock />
        </div>
    );
};
