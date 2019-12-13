
var Jimp = require('jimp');
//var jimp = require('jimp');
var colors = require('colors');
var request = require('request');
var fs = require('fs');
Jimp.read("ram.jpg", (err, ram) => {
  console.log('test jimp read');
  if (err) throw err;

  ram.resize(512, 128)
  ram.quality(60)
  ram.greyscale()
  ram.rgba(true)
  ram.contrast(0.5)
  // sign.color([
  //   {apply:'tint',params:[190]}
  // ])
  ram.write("modified.jpg",  function () {
    request.post({
      url: 'https://api.remove.bg/v1.0/removebg',
      formData: {
        image_file: fs.createReadStream('modified.jpg'),
        size: 'auto',
      },
      headers: {
        'X-Api-Key': 'px3sWHsaRn222eSCa9cVcbGU'
      },
      encoding: null
    },async function (error, response, body) {
      if (error) return console.error('Request failed:', error);
      if (response.statusCode != 200)
        return console.error('Error test..jimp:', response.statusCode, body.toString('utf8'));
      await fs.writeFileSync("Output.png",body);
      main()
     




    });


  })
  async function main() {

    console.log('test main');
    const image = await Jimp.read
      ('./Output.png');

    image.color([{ apply: 'green', params: [73] }])
      .write('Dark.png');
    console.log("Image Processing Completed");

  }
  



}


);

var Jimp = require('jimp');




