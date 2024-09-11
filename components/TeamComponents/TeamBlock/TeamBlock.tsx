import styles from './TeamBlock.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag'
import { setLocale } from '../../../helpers/locale.helper';
import { getTeam } from '../../../helpers/team.helper';
import { TeamItem } from '../TeamItem/TeamItem';


export const TeamBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.teamBlock}>
            <Htag tag='xl' className={styles.teamSubtitle}>
                {setLocale(router.locale).our_team}
            </Htag>
            <div className={styles.teamDiv}>
                {getTeam().map(t => (
                    <TeamItem key={t.photo} photo={t.photo} name={t.name} text={t.text} />
                ))}
            </div>
        </div>
    );
};
