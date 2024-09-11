import { FooterItemProps } from './FooterItem.props';
import styles from './FooterItem.module.css';
import { Htag } from '../../Common/Htag/Htag';


export const FooterItem = ({ text, element }: FooterItemProps): JSX.Element => {
    const scrollIntoView = require('scroll-into-view');

    return (
        <Htag tag='m' className={styles.footerItem} onClick={() => scrollIntoView(element)}>
            {text}
        </Htag>
    );
};
