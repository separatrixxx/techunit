import { TeamItemProps } from './TeamItem.props';
import styles from './TeamItem.module.css';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';


export const TeamItem = ({ photo, name, text }: TeamItemProps): JSX.Element => {
    return (
        <div className={styles.teamItem}>
            <Image className={styles.teamPhoto} draggable='false'
                loader={() => photo}
                src={photo}
                alt={'team image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
            <Htag tag='m' className={styles.teamName}>
                {name}
            </Htag>
            <Htag tag='s'>
                {text}
            </Htag>
        </div>
    );
};
