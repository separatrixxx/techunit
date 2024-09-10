import styles from './MainBlock.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../Common/Htag/Htag'
import { setLocale } from '../../helpers/locale.helper';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.mainBlock}>
            <Htag tag='xl' className={styles.mainTitle}>
                {setLocale(router.locale).welcome_to_techunit}
            </Htag>
            <Htag tag='m' className={styles.mainSubtitle}>
                {setLocale(router.locale).slogan}
            </Htag>
        </div>
    );
};
