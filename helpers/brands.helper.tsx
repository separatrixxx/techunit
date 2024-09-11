import { BrandsInterface } from "../interfaces/brands.interface";


export function getBrands(): BrandsInterface[] {
    const brand1: BrandsInterface = {
        photo: '1',
        name: 'TechGadget',
    }

    const brand2: BrandsInterface = {
        photo: '2',
        name: 'SmartHome',
    }

    const brand3: BrandsInterface = {
        photo: '3',
        name: 'DataSecure',
    }

    const brand4: BrandsInterface = {
        photo: '4',
        name: 'CloudConnect',
    }

    return [brand1, brand2, brand3, brand4];
}
