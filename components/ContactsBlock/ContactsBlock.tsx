import styles from './ContactsBlock.module.css';
import { getContacts } from '../../helpers/contacts.helper';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Common/Htag/Htag';
import { useRouter } from 'next/router';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';


export const ContactsBlock = (): JSX.Element => {
    const router = useRouter()

    return (
        <div id="contacts" className={styles.contactsBlock}>
            <Htag tag='xl' className={styles.contactsTitle}>
                {setLocale(router.locale).contact_us}
            </Htag>
            <Htag tag='m' className={styles.contactsSubtitle}>
                {setLocale(router.locale).get_in_touch}
            </Htag>
            <Htag tag='s'>
                {getContacts().email}
            </Htag>
            <Htag tag='s'>
                {getContacts().phone}
            </Htag>
            <Htag tag='s'>
                {getContacts().address}
            </Htag>
            <Htag tag='m' className={styles.contactsSubtitle}>
                {setLocale(router.locale).follow_us}
            </Htag>
            <div className={styles.socialMediaDiv}>
                <Link href='' target='_blank'>
                    <Htag tag='s'>
                        <Facebook size={32} />
                    </Htag>
                </Link>
                <Link href='' target='_blank'>
                    <Htag tag='s'>
                        <Instagram size={32} />
                    </Htag>
                </Link>
                <Link href='' target='_blank'>
                    <Htag tag='s'>
                        <Twitter size={32} />
                    </Htag>
                </Link>
            </div>
        </div>
    );
};
