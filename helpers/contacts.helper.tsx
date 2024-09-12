import { ContactsInterface } from "../interfaces/contacts.interface";


export function getContacts(): ContactsInterface {
    return {
        name: 'TechUnit s.r.o.',
        email: 'info@techunit.cz',
        phone: '+420 602 767 789',
        address: 'Plavnická 560373 81 Kamenný Újezd, Czech Republic',
    };
}
