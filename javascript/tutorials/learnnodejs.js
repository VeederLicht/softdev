/*
  NodeJS tips
*/

// Use Yarn

// Great modules:
const
    FSE = require('fs-extra'),
    ZLIB = require('zlib'), // nodejs internal
    CRYPTO = require('CRYPTO'), // nodejs internal,
/*
voorbeeld, http://lollyrock.com/articles/nodejs-encryption/
IN=FSE.createReadStream();
OUT=FSE.createWriteStream();
ENC=CRYPTO.createCipher(alg,pwd);
GZIP=ZLIB.createGzip();
IN.pipe(ENC).pipe(GZIP).pipe(OUT);
*/
