import qs from 'querystring';
import axios from 'axios';

export default class Fetch {
	constructor({ key }) {
		const fetch = axios.create({
			baseURL: `https://api.isabelle.io/sentiment`,
			headers: {
				Authorization: `Bearer ${key}`
			}
		});

		this.fetch = fetch;
	}

	async sentiment({ text }) {
		try {
			const { status, data } = await this.fetch.request({
				method: 'POST',
				url: '/',
				data: qs.stringify({ text })
			});

			return { status, data };
		} catch (error) {
			return error;
		}
	}
}
