import styles from './ContactsBlock.module.css';
import { getContacts } from '../../helpers/contacts.helper';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Common/Htag/Htag';
import { useRouter } from 'next/router';
import { Facebook, Instagram, Twitter } from 'lucide-react';
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
                {getContacts().email}
            </Htag>
            <Htag tag='m'>
                {getContacts().phone}
            </Htag>
            <Htag tag='m'>
                {getContacts().address}
            </Htag>
            <div className={styles.socialMediaDiv}>
                <Link href='' target='_blank'>
                    <Facebook size={32} />
                </Link>
                <Link href='' target='_blank'>
                    <Instagram size={32} />
                </Link>
                <Link href='' target='_blank'>
                    <Twitter size={32} />
                </Link>
            </div>
            <Plane className={styles.plane} />
        </div>
    );
};
