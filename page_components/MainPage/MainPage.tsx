import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { ContactsBlock } from '../../components/ContactsBlock/ContactsBlock';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';
import { BrandsBlock } from '../../components/BrandsComponents/BrandsBlock/BrandsBlock';
import { CareerBlock } from '../../components/CareerBlock/CareerBlock';
import { Footer } from '../../components/Footer/Footer';
import { MainBlock } from '../../components/MainBlock/MainBlock';


export const MainPage = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <Header />
                <MainBlock />
                <AboutBlock />
                <BrandsBlock />
                <CareerBlock />
                <ContactsBlock />
                <Footer />
            </div>
        </>
    );
};
