import styles from './LocaleChange.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { en } from '../../../locales/en.locale';
import { cz } from '../../../locales/cz.locale';
import { de } from '../../../locales/de.locale';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { Modal } from '../Modal/Modal';


export const LocaleChange = (): JSX.Element => {
    const router = useRouter();

    const [active, setActive] = useState<boolean>(false);

    const languages = [en, cz, de];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    return (
        <>
            <Htag tag='m' className={styles.lang} onClick={() => setActive(true)}>
                {setLocale(router.locale).lang}
            </Htag>
            <Modal active={active} setActive={setActive}>
                <div className={styles.blockLanguages}>
                    {languages.map(m => (
                        <Link key={m.locale} href={router.asPath} locale={m.locale} aria-label={m.locale}
                            onClick={() => setActive(false)}>
                            <Htag tag='l' className={styles.langLink}>{m.language}</Htag>
                        </Link>
                    ))}
                </div>
            </Modal>
        </>
    );
};