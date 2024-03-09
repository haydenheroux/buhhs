import { storable } from "./storable";

export interface User {
    name: string;
    location: string;
    treatments: Array<Treatment>;
}

export function createUser(name: string, location: string): User {
    return {
        name: name,
        location: location,
        treatments: [] as Array<Treatment>,
    };
}

export function addTreatment(treatment: Treatment) {
    let user = storedUser.get();

    user.treatments.push(treatment);

    storedUser.set(user);
}

export function hasTreatment(treatmentName: string) {
    let user = storedUser.get();

    return user.treatments.filter(userTreatment => userTreatment.name == treatmentName).length > 0;
}

export function removeTreatment(treatmentName: string) {
    let user = storedUser.get();

    user.treatments = user.treatments.filter(x => x.name != treatmentName);

    storedUser.set(user);
}

export const storedUser = storable<User>("user", createUser("John Doe", "Boston"));

export interface Provider {
    name: string;
    location: string;
    treatmentNames: Array<string>;
}

export function createProvider(name: string, location: string): Provider {
    return {
        name: name,
        location: location,
        treatmentNames: [] as Array<string>,
    };
}
export const storedProviders = storable<Array<Provider>>("providers", []);

export function hasProvider(providerName: string) {
    let providers = storedProviders.get();

    return providers.filter(provider => provider.name == providerName).length > 0;
}

export function addProvider(provider: Provider) {
    let providers = storedProviders.get();

    providers.push(provider);

    storedProviders.set(providers);
}

function providerHasTreatment(provider: Provider, treatment: Treatment): boolean {
    return provider.treatmentNames.filter(name => treatment.name == name).length > 0;
}

export function findProvidersWithTreatment(treatment: Treatment) {
    let providers = storedProviders.get();

    return providers.filter(provider => providerHasTreatment(provider, treatment));
}

export function addTreatmentToProvider(providerName: string, treatmentName: string) {
    let providers = storedProviders.get();

    let filteredProviders = providers.filter(provider => provider.name == providerName);

    if (filteredProviders.length != 1) {
        return;
    }

    let provider = filteredProviders[0];

    let index = providers.indexOf(provider);

    providers[index].treatmentNames.push(treatmentName);

    storedProviders.set(providers);
}

export interface Treatment {
    name: string;
    amount: number;
    condition: string;
}

export function createTreatment(name: string, amount: number, condition: string): Treatment {
    return { name, amount, condition };
}
