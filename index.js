module.exports = function miniNonce(len, chars) {
  var l = typeof len === 'number' ? len : 10;
  var a = typeof chars === 'string' && chars.length < 100 ? chars : 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_1234567890';
  var m = a.length;
  var r = '';
  for (var i=0; i<l; i++) r+= a[Math.floor(Math.random() * m)];
  return r;
};
