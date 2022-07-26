const { Router } = require("express");
const router = Router();
const puppeteer = require("puppeteer");

async function getDolarBlue() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://dolarhoy.com/");

  const dolarText = await page.$eval(
    "#home_0 > div.modulo.modulo_bloque > section > div > div > div > div.tile.is-parent.is-9.cotizacion.is-vertical > div > div.tile.is-parent.is-5 > div > div.values > div.venta > div.val",
    (el) => el.innerHTML
  );
  var dolar = Number(dolarText.slice(1));
  console.log(dolar);
  await browser.close();
  return dolar;
}


router.get("/", async (req, res) => {
  console.log(dolar);
  var dolar = await getDolarBlue();
  res.send({ dolar });
});

module.exports = router;
