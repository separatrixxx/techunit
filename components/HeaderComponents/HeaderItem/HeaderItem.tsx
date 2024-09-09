import { HeaderItemProps } from './HeaderItem.props';
import styles from './HeaderItem.module.css';
import { Htag } from '../../Common/Htag/Htag';


export const HeaderItem = ({ hidden, text, element }: HeaderItemProps): JSX.Element => {
    const scrollIntoView = require('scroll-into-view');

    return (
        <Htag tag='s' className={styles.headerItem} style={hidden ? { display: 'none' } : { display: 'block' }}
            onClick={() => scrollIntoView(element)}>
            {text}
        </Htag>
    );
};
