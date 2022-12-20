// ETRI OPEN API 연결
const fs = require('fs');
const request = require("request");
const axios = require('axios');

const openApiURL = process.env.ETRI_URI;
const accessKey = process.env.ETRI_KEY;
const CATEGORIES = ["upcloth", "pants"];
const type = 'jpg';
const imageFilePath = './test1.jpg';

/*
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
*/

// const getClubInfo = async (name) => {
//   const options = {
//     method: 'GET',
//     url: 'https://api-football-beta.p.rapidapi.com/teams',
//     params: { league: '39', season: '2021', name },
//     headers: {
//       'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
//       'x-rapidapi-key': '2605e9a060msh885fdd0c17d8e72p14b936jsn139f9bd84a62',
//     },
//   };

//   try {
//     const data = axios.request(options).then((response) => {
//       return response.data.response;
//     });
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log('[FAIL] getClubInfo', err);
//   }
// };

const analyzeImage = async (type, file) => {
  try {
    //const imageData = fs.readFileSync(file);
    const requestJson = {
      'access_key': access_key,
      'argument': {
        'type': type,
        file
        //'file': imageData.toString('base64')
      }
    };

    const options = {
      url: openApiURL,
      body: JSON.stringify(requestJson),
      headers: {'Content-Type':'application/json; charset=UTF-8'}
    };
    request.post(options, (error, response, body) => {
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
      console.log(typeof(colors));
      return colors;
    });
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = analyzeImage;