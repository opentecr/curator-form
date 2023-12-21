import { NotFoundError, HttpError } from './errors';

export interface IWork {
    title: string;
    DOI: string;
    ISSN: string[];
    abstract?: string;
}

export interface IWorkResponse {
    message: IWork;
}

export class CrossRefService {
    static API_URL: string = 'https://api.crossref.org';

    static async getWork(doi: string): Promise<IWork> {
        const response: Response = await fetch(`${this.API_URL}/works/${doi}`);
        if (response.status === 404) {
            throw new NotFoundError(`Work with DOI '${doi}' not found.`);
        } else if (!response.ok) {
            throw new HttpError(response);
        }
        const rsp: IWorkResponse = await response.json();
        return rsp.message;
    }
}
