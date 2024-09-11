import styles from './TeamItem.module.css';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { TeamItemProps } from './TeamItem.props';


export const TeamItem = ({ photo, name, text }: TeamItemProps): JSX.Element => {
    const teamItemRef = useRef<HTMLDivElement>(null);
    const teamNameRef = useRef<HTMLHeadingElement>(null);
    const teamTextRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const teamItem = teamItemRef.current;
        const teamName = teamNameRef.current;
        const teamText = teamTextRef.current;

        if (teamItem && teamName && teamText) {
            gsap.set([teamName, teamText], { opacity: 0, y: -20 });

            const onMouseEnter = () => {
                gsap.killTweensOf([teamName, teamText]);
                gsap.to(teamName, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
                gsap.to(teamText, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.3 });
            };

            const onMouseLeave = () => {
                gsap.killTweensOf([teamName, teamText]);
                gsap.to(teamName, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" });
                gsap.to(teamText, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out", delay: 0.3 });
            };

            teamItem.addEventListener('mouseenter', onMouseEnter);
            teamItem.addEventListener('mouseleave', onMouseLeave);

            return () => {
                teamItem.removeEventListener('mouseenter', onMouseEnter);
                teamItem.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, []);

    return (
        <div className={styles.teamItem} ref={teamItemRef}>
            <Image className={styles.teamPhoto} draggable='false'
                loader={() => photo}
                src={photo}
                alt={'team image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
            <Htag tag='m' className={styles.teamName} ref={teamNameRef}>
                {name}
            </Htag>
            <Htag tag='s' className={styles.teamText} ref={teamTextRef}>
                {text}
            </Htag>
        </div>
    );
};
