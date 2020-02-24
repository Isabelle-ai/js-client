import Isabelle from '../dist';

const client = new Isabelle({
	key: '123ABC',
});

const extract = async () => {
	try {
		const sentiment = await client.sentiment({
			text: 'I strongly hate apples because they taste horrible!',
		});

		console.log(sentiment);
	} catch (error) {
		console.error(error);
	}
};

extract();
