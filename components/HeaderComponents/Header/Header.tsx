import styles from './Header.module.css';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Logo from './logo.svg';
import { motion } from 'framer-motion';
import { useResizeW } from '../../../hooks/useResize';
import { BurgerMenu } from '../BurgerMenu/BurgenMenu';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import { LocaleChange } from '../../Common/LocaleChange/LocaleChange';

export const Header = (): JSX.Element => {
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement | null>(null);

    const [open, setOpen] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(false);
    const width = useResizeW();

    const variants = {
        visible: {
            height: 'fit-content',
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            }
        }
    };

    if (width > 1024) {
        variants.visible.transition.duration = 0;
        variants.hidden.transition.duration = 0;
    }

    const [element1, setElement1] = useState<Element | null>(null);
    const [element2, setElement2] = useState<Element | null>(null);
    const [element3, setElement3] = useState<Element | null>(null);
    const [element4, setElement4] = useState<Element | null>(null);

    useEffect(() => {
        setHidden(width <= 1024);

        setElement1(document.getElementById('about'));
        setElement2(document.getElementById('brands'));
        setElement3(document.getElementById('career'));
        setElement4(document.getElementById('contacts'));

        const handleScroll = () => {
            setOpen(false);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [width]);

    return (
        <header className={styles.header} ref={headerRef}>
            <Link href='/' aria-label='logo' className={styles.logo}>
                <Logo />
            </Link>
            <motion.div className={styles.headerBlock}
                variants={variants}
                initial={open || width > 1024 ? 'visible' : 'hidden'}
                animate={open || width > 1024 ? 'visible' : 'hidden'}
                style={width > 1024 ? { gridTemplateColumns: 'repeat(4, auto)' } : { gridTemplateRows: 'repeat(4, auto)' }}>
                <HeaderItem hidden={hidden} text={setLocale(router.locale).about_company} element={element1} />
                <HeaderItem hidden={hidden} text={setLocale(router.locale).our_partners} element={element2} />
                <HeaderItem hidden={hidden} text={setLocale(router.locale).career} element={element3} />
                <HeaderItem hidden={hidden} text={setLocale(router.locale).contact_us} element={element4} />
            </motion.div>
            <div className={styles.headerButtonsDiv}>
                <LocaleChange />
                <BurgerMenu open={open} setOpen={setOpen} setHidden={setHidden} />
            </div>
        </header>
    );
};