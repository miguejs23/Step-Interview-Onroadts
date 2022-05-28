import bcrypt from 'bcryptjs';

/**
 * Encrypt a plain text input
 * @param {string} textPlain - The plain text input
 * @returns {string} Encrypted input
 */
const encrypt = async (textPlain) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(textPlain, salt);
  return hash;
}

/**
 * Compare the two given parameters
 * @param {string} textPlain - Password in plain text
 * @param {string} hashPassword - Encrypted password
 * @returns {bool} True if the are the same. Otherwise false
 */
const compare = async (textPlain, hashPassword) => {
  return await bcrypt.compare(textPlain, hashPassword);
}

export { encrypt, compare };
