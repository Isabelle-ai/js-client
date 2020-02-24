import Fetch from './utils/fetch';

export default class Isabelle {
	constructor({ key }) {
		this.fetch = new Fetch({ key });
	}

	async sentiment({ text }) {
		try {
			if (!text || !text.length === 0) {
				throw new Error(
					'Invalid text. Please pass text greater than 0 characters.'
				);
			}

			const response = await this.fetch.post({
				text,
			});

			return { code: 200, data: response };
		} catch (error) {
			return new Error(error);
		}
	}
}
