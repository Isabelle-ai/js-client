![](https://i.imgur.com/AwHkale.png)

![Dependency Status](https://img.shields.io/david/isabelle-ai/js-client)
![Dependency Size](https://img.shields.io/github/size/isabelle-ai/js-client/dist/index.js)
![Open Issues](https://img.shields.io/github/issues-raw/isabelle-ai/js-client)
![Version](https://img.shields.io/npm/v/@isabele-ai/js-client)

JavaScript / Node.js Client for The Worlds Most Powerful Sentiment Analysis API.

## Example

```javascript
import Isabelle from '@isabelle-js/js-client';

const client = new Isabelle({
	key: '9ce4e535-01d1-4f27-ad6f-649a4851c330', // your api key
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
