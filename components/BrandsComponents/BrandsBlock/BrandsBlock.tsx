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
    const brandsDivRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
                const ScrollTrigger = ScrollTriggerModule.default;
                gsap.registerPlugin(ScrollTrigger);

                const brandsTitle = brandsTitleRef.current;
                const brandsDiv = brandsDivRef.current;

                if (brandsTitle && brandsDiv) {
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

                    tl.fromTo(brandsDiv,
                        { opacity: 0 },
                        { opacity: 1, duration: 1, ease: "power2.out" },
                        0.5
                    )
                }
            });
        }
    }, []);

    const titleText = setLocale(router.locale).our_partners.toUpperCase();
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
            <div className={styles.brandsDiv} ref={brandsDivRef}>
                {getBrands().map(b => (
                    <BrandItem key={b.photo} photo={b.photo} link={b.link} />
                ))}
            </div>
        </div>
    );
};
