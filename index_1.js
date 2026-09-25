const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: use cryptographically secure random bytes for the suffix
  var suffix = crypto.randomBytes(4).readUInt32BE(0) / 0x100000000;
  var password = "sssAAAA" + suffix;
  return password;
}