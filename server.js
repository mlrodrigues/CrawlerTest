const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  const pageData = await page.evaluate(() => {
    let data = [];
		let elements = document.querySelectorAll('.thumbnail');

    for(var element of elements){
			let textSplit = element.childNodes[3].innerText.split("\n");
			let price = textSplit[0];
			let title = textSplit[1];
			let description = textSplit[3].replace('\"', '"');
			let image = element.childNodes[1].src;

			if(title.indexOf("Lenovo") != -1){
				data.push({image, price, title, description});
				console.log(data);
			}
		}

    return data;
  });

  fs.writeFile('laptops.json', JSON.stringify(pageData, null, 2), err =>{
		if(err) throw new Error('Something went wrong');
		console.log('well done')
	});

  await browser.close();
  console.log('Bot finalizado!');

  res.send( 
    pageData.map(element => ({
      image: element.image,
      title: element.title,
      description: element.description
    }))
  )
});


app.listen(3000, () => {
  console.log("servidor subiu com sucesso! Acesse em https://localhost:3000")
});