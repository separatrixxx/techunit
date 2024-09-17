import { BrandItemProps } from './BrandItem.props';
import styles from './BrandItem.module.css';
import Image from 'next/image';
import Link from 'next/link';


export const BrandItem = ({ photo, link }: BrandItemProps): JSX.Element => {
    return (
        <Link href={link} target="_blank" className={styles.brandItem}>
            <Image className={styles.brandPhoto} draggable='false'
                loader={() => photo}
                src={photo}
                alt={'brand image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
        </Link>
    );
};
