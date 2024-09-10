import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TeamItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	photo: string,
	name: string,
	text: string,
}
