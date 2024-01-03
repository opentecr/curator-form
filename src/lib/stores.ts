import { persisted } from 'svelte-persisted-store';

export const currentCuratedMeasurement = persisted('currentCuratedMeasurement', {
    contributor: { orcid: '', name: '' },
    publication: { doi: '' },
    reaction: { id: '' },
    measurement: {
        equilibriumConstant: {},
        hydrogenPotential: {},
        magnesiumPotential: {},
        temperature: {},
        ionicStrength: {}
    }
});
