import { BrandItemProps } from './BrandItem.props';
import styles from './BrandItem.module.css';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';


export const BrandItem = ({ photo, name }: BrandItemProps): JSX.Element => {
    const brandItemRef = useRef<HTMLDivElement>(null);
    const brandNameRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const brandItem = brandItemRef.current;
        const brandName = brandNameRef.current;

        if (brandItem && brandName) {
            gsap.set([brandName], { opacity: 0, y: -20 });

            const onMouseEnter = () => {
                gsap.killTweensOf([brandName]);
                gsap.to(brandName, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
            };

            const onMouseLeave = () => {
                gsap.killTweensOf([brandName]);
                gsap.to(brandName, { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" });
            };

            brandItem.addEventListener('mouseenter', onMouseEnter);
            brandItem.addEventListener('mouseleave', onMouseLeave);

            return () => {
                brandItem.removeEventListener('mouseenter', onMouseEnter);
                brandItem.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, []);

    return (
        <div className={styles.brandItem} ref={brandItemRef}>
            <Image className={styles.brandPhoto} draggable='false'
                loader={() => photo}
                src={photo}
                alt={'brand image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
            <Htag tag='m' className={styles.brandName} ref={brandNameRef}>
                {name}
            </Htag>
        </div>
    );
};
