class OTPGenerate {
  constructor(data) {
    this.data = data;
  }

  generateData = (data) => {
    let otp = ''
    for (let i = 0; i < data; i++) {
        otp += Math.floor(Math.random(i) * 9);
    }
    return otp;
  }
}

let otp = new OTPGenerate();
console.log(otp.generateData(6));
