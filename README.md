![Dependency Status](https://img.shields.io/david/isabelle-ai/js-client)
![Dependency Size](https://img.shields.io/github/size/isabelle-ai/js-client/dist/index.js)
![Open Issues](https://img.shields.io/github/issues-raw/isabelle-ai/js-client)
![Version](https://img.shields.io/npm/v/js-client)

JS Client for The Worlds Most Powerful Sentiment Analysis API.

## Example

```javascript
import Isabelle from '@isabelle-js/js-client';

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
```
