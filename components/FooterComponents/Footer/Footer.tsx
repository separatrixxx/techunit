import { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { setFooterYear } from '../../../helpers/footerYear.helper';
import { ByBlock } from '../../Common/ByBlock/ByBlock';
import { FooterItem } from '../FooterItem/FooterItem';


export const Footer = (): JSX.Element => {
    const router = useRouter();

    const [element1, setElement1] = useState<Element | null>(null);
    const [element2, setElement2] = useState<Element | null>(null);
    const [element3, setElement3] = useState<Element | null>(null);
    const [element4, setElement4] = useState<Element | null>(null);

    useEffect(() => {
        setElement1(document.getElementById('about'));
        setElement2(document.getElementById('brands'));
        setElement3(document.getElementById('career'));
        setElement4(document.getElementById('contacts'));
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <FooterItem text={setLocale(router.locale).about_company} element={element1} />
                <FooterItem text={setLocale(router.locale).our_partners} element={element2} />
                <FooterItem text={setLocale(router.locale).career} element={element3} />
                <FooterItem text={setLocale(router.locale).contact_us} element={element4} />
            </div>
            <Htag tag='s' className={styles.footerText}>
                {`© ${setFooterYear(2024)} TechUnit s.r.o. ${setLocale(router.locale).all_rights_reserved}`}
            </Htag>
            <ByBlock color='dark' />
        </footer>
    );
};
