import styles from './AboutBlock.module.css';
import { useRouter } from 'next/router';
import { Htag } from '../Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { TeamBlock } from '../TeamComponents/TeamBlock/TeamBlock';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export const AboutBlock = (): JSX.Element => {
    const router = useRouter();

    const aboutTitleRef = useRef<HTMLDivElement>(null);
    const aboutTextRef = useRef<HTMLHeadingElement>(null);
    const aboutTeamBlockRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
                const ScrollTrigger = ScrollTriggerModule.default;
                gsap.registerPlugin(ScrollTrigger);

                const aboutTitle = aboutTitleRef.current;
                const aboutText = aboutTextRef.current;
                const aboutTeamBlock = aboutTeamBlockRef.current;

                if (aboutTitle && aboutText && aboutTeamBlock) {
                    const letters = aboutTitle.querySelectorAll('.letter');
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: aboutTitle,
                            start: "top 80%",
                        },
                    });

                    tl.fromTo(letters,
                        { opacity: 0, rotateY: 90 },
                        { opacity: 1, rotateY: 0, duration: 1, stagger: 0.05, ease: "power2.out" }
                    );

                    tl.fromTo(aboutText,
                        { opacity: 0 },
                        { opacity: 1, duration: 1, ease: "power2.out" },
                        0.5
                    ).fromTo(aboutTeamBlock,
                        { opacity: 0 },
                        { opacity: 1, duration: 1, ease: "power2.out" },
                        0.5
                    );
                }
            });
        }
    }, []);

    const titleText = setLocale(router.locale).about_us.toUpperCase();
    const titleLetters = titleText.split('').map((letter, index) => (
        <span key={index} className="letter">
            {letter}
        </span>
    ));

    return (
        <div id="about" className={styles.aboutBlock}>
            <Htag tag='xxxl' className={styles.aboutTitle} ref={aboutTitleRef}>
                {titleLetters}
            </Htag>
            <Htag tag='l' className={styles.aboutText} ref={aboutTextRef}>
                {setLocale(router.locale).about_text}
            </Htag>
            <div ref={aboutTeamBlockRef}>
                <TeamBlock />
            </div>
        </div>
    );
};
