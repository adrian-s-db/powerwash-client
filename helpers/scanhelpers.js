export default function extractCode (url) {
  const regex = new RegExp('^https://eprel.ec.europa.eu/qr/([0-9]+)');
  const isValid = regex.test(url);
  return isValid ? url.match(regex)[1] : null;
};