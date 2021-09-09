const Buffer = require('buffer/').Buffer
const crypto = require('crypto');

const st = 'MEZ89AP798+qAHv+/av9SHkQ67/kTOmMCWHhSxumJnBM+NwE+ctFLCRazVtPbwkYnEHuOh1s94vorNbV/rw19niQAlrB0+R+vwFqMFMqCfQ=:MTIzNDU2Nzg5MDEyMzQ1Ng=='
const key = '@#)((1*$#1$#@#%!';
const vector = ':><{{V\}>V}>:>#?';
console.log('Decrypted Data',decrypt(key,vector,st));

function decrypt(key, iv, crypted) {
  try {
      var iv = new Buffer(crypto.randomBytes(16))
      crypted = Buffer.from(crypted, 'base64').toString('binary');
      var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
      decipher.setAutoPadding(false);
      var decoded = decipher.update(crypted, 'binary', 'utf8');
      //console.log(decoded);
      decoded += decipher.final('utf8');
      //console.log(decoded);
      decoded = decoded.split("}");
      decoded = decoded[0];
      decoded = decoded+"}";
      return decoded;
  } catch (e) {
      return e;
  }
}


