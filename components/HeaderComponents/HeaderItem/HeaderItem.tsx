import { HeaderItemProps } from './HeaderItem.props';
import styles from './HeaderItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const HeaderItem = ({ hidden, text, element }: HeaderItemProps): JSX.Element => {
    const scrollIntoView = require('scroll-into-view');

    return (
        <Htag tag='m' className={cn(styles.headerItem, {
            [styles.hidden]: hidden,
        })} onClick={() => scrollIntoView(element)}>
            {text}
        </Htag>
    );
};
