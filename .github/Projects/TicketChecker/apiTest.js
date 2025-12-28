const Captcha = require('@2captcha/captcha-solver');
const solver = new Captcha.Solver('ecf4a831b56040283038e35c813fcee4');


solver.imageCaptcha({
    body: 'data:image/png;base64,iVBORw0KGgoAAAANSUhE...',
})
.then((res) => {
  // Logs the image text
  console.log(res);
});


console.log("test");

solver.balance()
.then((res) => {
    console.log(res)
});

// solver.goodReport('7031846604') // captcha solved correctly
// solver.badReport('7031854546')  // captcha solved incorrectly