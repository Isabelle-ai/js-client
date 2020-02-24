import Fetch from './utils/fetch';

export default class Isabelle {
	constructor({ key }) {
		this.fetch = new Fetch({ key });

		this.text = text;
	}

	async sentiment() {
		try {
			if (!this.text || !this.text.length === 0) {
				throw new Error('Invalid text. Please pass text greater than 0 characters.');
			}

			const response = await this.fetch.post({
				text: this.text
			});

			return { code: 200, data: response };
		} catch (error) {
			return new Error(error);
		}
	}
}
