// ETRI OPEN API 연결
const fs = require('fs');
const request = require("request");

const openApiURL = process.env.ETRI_URI;
const access_key = process.env.ETRI_KEY;
const CATEGORIES = ["upcloth", "pants"];
const type = 'jpg';
const imageFilePath = './test1.jpg';

const imageData = fs.readFileSync(imageFilePath);
const requestJson = {
	'access_key': access_key,
	'argument': {
		'type': type,
		'file': imageData.toString('base64')
	}
};

const options = {
	url: openApiURL,
	body: JSON.stringify(requestJson),
	headers: {'Content-Type':'application/json; charset=UTF-8'}
};

request.post(options, function (error, response, body) {
	console.log('responseCode = ' + response.statusCode);
  
  // 상의, 하의 rgb값만 가져오기
  const apiData = JSON.parse(body);
  const result = JSON.parse(apiData.return_object.results);
  
  const person = result.person_1;
  const colors = CATEGORIES.reduce((prev, val, idx) => {
    if (person[`${val} mask`] !== "None") 
      return [
        ...prev,
        {
          type: val,
          color: person[`${val} color`],
        },
      ];
      return prev;
  }, []);

  console.log(colors);
});