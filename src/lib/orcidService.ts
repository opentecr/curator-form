import { NotFoundError, HttpError } from './errors';

export interface IORCIDPerson {
    name: {
        'given-names': {
            value: string;
        };
        'family-name': {
            value: string;
        };
    };
}

export class OrcidService {
    static API_URL: string = 'https://pub.orcid.org/v3.0';

    static async getRecordName(orcid: string): Promise<string> {
        const response = await fetch(`${this.API_URL}/${orcid}/person`, {
            headers: { Accept: 'application/vnd.orcid+json' }
        });
        if (response.status === 404) {
            throw new NotFoundError(`ORCID record '${orcid}' not found.`);
        } else if (!response.ok) {
            throw new HttpError(response);
        }
        const person: Readonly<IORCIDPerson> = await response.json();
        return `${person.name['given-names'].value} ${person.name['family-name'].value}`;
    }
}
