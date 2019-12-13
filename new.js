

var replaceColor = require('replace-color')
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
        replaceColor({
            image: 'modified.jpg',
            colors: {
              type: 'rgb',
              targetColor: [255, 255, 255],
              replaceColor: [255, 255, 255, 0.8]
            },
            deltaE: 10
          })
            .then((jimpObject) => {
              jimpObject.write('./op.png', (err) => {
                if (err) return console.log(err)
              })
            })
            .catch((err) => {
              console.log(err)
            })

    })


 
});




