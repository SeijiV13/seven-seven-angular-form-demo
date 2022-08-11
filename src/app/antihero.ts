export interface AntiHero {
    firstName: string;
    lastName: string
    knownAs: string;
    address: {
        street: string;
        city: string;
        country: string;
    }
    powers: string[]
}