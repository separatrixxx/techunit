import { BrandsInterface } from "../interfaces/brands.interface";


export function getBrands(): BrandsInterface[] {
    const brand1: BrandsInterface = {
        photo: '',
        name: 'TechGadget',
    }

    const brand2: BrandsInterface = {
        photo: '',
        name: 'SmartHome',
    }

    const brand3: BrandsInterface = {
        photo: '',
        name: 'DataSecure',
    }

    const brand4: BrandsInterface = {
        photo: '',
        name: 'CloudConnect',
    }

    return [brand1, brand2, brand3, brand4];
}
