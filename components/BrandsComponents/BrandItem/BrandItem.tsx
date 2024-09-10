import { BrandItemProps } from './BrandItem.props';
import styles from './BrandItem.module.css';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';


export const BrandItem = ({ photo, name }: BrandItemProps): JSX.Element => {
    return (
        <div className={styles.brandItem}>
            <Image className={styles.brandPhoto} draggable='false'
                loader={() => photo}
                src={photo}
                alt={'brand image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
            <Htag tag='m' className={styles.brandName}>
                {name}
            </Htag>
        </div>
    );
};
