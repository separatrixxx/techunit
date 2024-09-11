import styles from './BrandsBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { getBrands } from '../../../helpers/brands.helper';
import { BrandItem } from '../BrandItem/BrandItem';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export const BrandsBlock = (): JSX.Element => {
    const router = useRouter();

    const brandsTitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
                const ScrollTrigger = ScrollTriggerModule.default;
                gsap.registerPlugin(ScrollTrigger);

                const brandsTitle = brandsTitleRef.current;

                if (brandsTitle) {
                    const letters = brandsTitle.querySelectorAll('.letter');
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: brandsTitle,
                            start: "top 80%",
                        },
                    });

                    tl.fromTo(letters,
                        { opacity: 0, rotateY: 90 },
                        { opacity: 1, rotateY: 0, duration: 1, stagger: 0.05, ease: "power2.out" }
                    );
                }
            });
        }
    }, []);

    const titleText = setLocale(router.locale).our_brands.toUpperCase();
    const titleLetters = titleText.split('').map((letter, index) => (
        <span key={index} className="letter">
            {letter}
        </span>
    ));
    
    return (
        <div id="brands" className={styles.brandsBlock}>
            <Htag tag='xxxl' className={styles.brandsTitle} ref={brandsTitleRef}>
                {titleLetters}
            </Htag>
            <div className={styles.brandsDiv}>
                {getBrands().map(b => (
                    <BrandItem key={b.photo} photo={b.photo} name={b.name} />
                ))}
            </div>
        </div>
    );
};
