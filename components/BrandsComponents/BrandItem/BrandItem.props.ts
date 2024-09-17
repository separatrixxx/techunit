import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface BrandItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	photo: string,
	link: string,
}
