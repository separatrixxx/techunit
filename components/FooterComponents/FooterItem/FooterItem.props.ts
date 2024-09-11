import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FooterItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	text: string,
    element: Element | null,
}
