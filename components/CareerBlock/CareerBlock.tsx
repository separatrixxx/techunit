import styles from './CareerBlock.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../Common/Htag/Htag'
import { setLocale } from '../../helpers/locale.helper';


export const CareerBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div id="career" className={styles.careerBlock}>
            <Htag tag='xl' className={styles.careerTitle}>
                {setLocale(router.locale).join_our_team}
            </Htag>
            <Htag tag='l' className={styles.careerText}>
                {setLocale(router.locale).career_text}
            </Htag>
        </div>
    );
};
