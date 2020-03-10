import Isabelle from '../dist';

const client = new Isabelle({
	key: 'YOUR_API_KEY', // found on isabelle.ai
});

const extract = async () => {
	try {
		const sentiment = await client.sentiment({
			text: 'I love apples!',
		});

		console.log(sentiment);
	} catch (error) {
		console.error(error);
	}
};

extract();
