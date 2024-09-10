import styles from './BrandsBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { getBrands } from '../../../helpers/brands.helper';
import { BrandItem } from '../BrandItem/BrandItem';


export const BrandsBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div id="brands" className={styles.brandsBlock}>
            <Htag tag='xl' className={styles.brandsTitle}>
                {setLocale(router.locale).our_brands}
            </Htag>
            <div className={styles.brandsDiv}>
                {getBrands().map(b => (
                    <BrandItem key={b.photo} photo={b.photo} name={b.name} />
                ))}
            </div>
        </div>
    );
};
