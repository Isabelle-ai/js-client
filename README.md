![Dependency Status](https://img.shields.io/david/isabelle-ai/js-client)
![Dependency Size](https://img.shields.io/github/size/isabelle-ai/js-client/dist/index.js)
![Open Issues](https://img.shields.io/github/issues-raw/isabelle-ai/js-client)
![Version](https://img.shields.io/npm/v/js-client)

JS Client for The Worlds Most Powerful Sentiment Analysis API.

## Example

To send a verification code using, use the `start` method as shown below:

```javascript
import Isabelle from '@isabelle-js/js-client';

const auth = new Isabelle({
	key: 'YOUR_ISABELLE_API_KEY', // required (found in the isabelle.ai console)
});

const sentiment = async () => {
	try {
    // get sentiment of text
		const sentiment = await sentiment.get({ text: 'I love Isabelle!' });
    
    // do something with response
		console.log(sentiment);
	} catch (error) {
		console.log(error);
	}
};

sentiment();
```
