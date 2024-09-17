import { BrandsInterface } from "../interfaces/brands.interface";


export function getBrands(): BrandsInterface[] {
    const brand1: BrandsInterface = {
        photo: '/PartnerImg1.webp',
        link: 'https://vyrobce-parfemu.cz',
    }

    const brand2: BrandsInterface = {
        photo: '/PartnerImg2.webp',
        link: 'https://bict.it',
    }

    const brand3: BrandsInterface = {
        photo: '/PartnerImg3.webp',
        link: 'https://acto.ge',
    }

    const brand4: BrandsInterface = {
        photo: '/PartnerImg4.webp',
        link: 'https://www.pharsmart.com',
    }

    return [brand1, brand2, brand3, brand4];
}
