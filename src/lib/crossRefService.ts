import { CrossrefClient, type Works } from '@jamesgopsill/crossref-client';

import { NotFoundError, HttpError } from './errors';

export class CrossRefService {
    client: CrossrefClient;

    constructor(mailto: string | undefined = undefined) {
        this.client = new CrossrefClient(mailto);
    }

    async getWork(doi: string): Promise<Works> {
        const response = await this.client.work(doi);
        if (response.status === 404) {
            throw new NotFoundError(`Work with DOI '${doi}' not found.`);
        } else if (!response.ok) {
            throw new HttpError(response);
        }
        return response.content.message;
    }
}
