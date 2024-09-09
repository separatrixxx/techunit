import { ContactsInterface } from "../interfaces/contacts.interface";


export function getContacts(): ContactsInterface {
    return {
        email: 'info@techunit.com',
        phone: '+1 (123) 456-7890',
        address: '123 Tech Street, Innovation City, 12345',
    };
}
