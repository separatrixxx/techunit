import styles from './MainBlock.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();
    const [element, setElement] = useState<Element | null>(null);
    const mainTitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setElement(document.getElementById('about'));

        if (typeof window !== 'undefined') {
            const mainTitle = mainTitleRef.current;

            if (mainTitle) {
                const letters = mainTitle.querySelectorAll('.letter');
                gsap.fromTo(letters,
                    { opacity: 0, rotateY: 90 },
                    { opacity: 1, rotateY: 0, duration: 1, stagger: 0.05, ease: "power2.out" }
                );
            }
        }
    }, []);

    const titleText = setLocale(router.locale).welcome_to_techunit.toUpperCase();
    const titleLetters = titleText.split('').map((letter, index) => (
        <span key={index} className="letter">
            {letter}
        </span>
    ));

    const scrollIntoView = require('scroll-into-view');

    return (
        <div className={styles.mainBlock}>
            <Htag tag='xxl' className={styles.mainTitle} ref={mainTitleRef}>
                {titleLetters}
            </Htag>
            <ChevronDown className={styles.arrow} size={48} onClick={() => scrollIntoView(element)} />
        </div>
    );
};
