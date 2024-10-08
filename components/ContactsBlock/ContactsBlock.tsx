import styles from './ContactsBlock.module.css';
import { getContacts } from '../../helpers/contacts.helper';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Common/Htag/Htag';
import { useRouter } from 'next/router';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Plane from './plane.svg';


export const ContactsBlock = (): JSX.Element => {
    const router = useRouter();

    return (
        <div id="contacts" className={styles.contactsBlock}>
            <Htag tag='xl' className={styles.contactsTitle}>
                {setLocale(router.locale).get_in_touch}
            </Htag>
            <Htag tag='m'>
                {getContacts().name}
            </Htag>
            <Link className={styles.contactsLink} href={`mailto:${getContacts().email}`} target='_blank' aria-label='email'>
                <Htag tag='m'>
                    {getContacts().email}
                </Htag>
            </Link>
            <Link className={styles.contactsLink} href={`tel:${getContacts().phone}`} target='_blank' aria-label='phone'>
                <Htag tag='m'>
                    {getContacts().phone}
                </Htag>
            </Link>
            <Htag tag='m'>
                {getContacts().address}
            </Htag>
            <div className={styles.socialMediaDiv}>
                <Link href='' target='_blank' aria-label='linkedin'>
                    <Linkedin size={32} />
                </Link>
            </div>
            <Plane className={styles.plane} />
        </div>
    );
};
