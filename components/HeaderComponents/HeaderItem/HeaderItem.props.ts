import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HeaderItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	hidden: boolean,
	text: string,
    element: Element | null,
}
