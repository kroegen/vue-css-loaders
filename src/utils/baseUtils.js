export function handleAddRule(selector, rule) {
  const sheet = document.styleSheets[0];

  try {
    sheet.insertRule(`${selector} { ${rule} }`, 0);
  } catch(msie) {
    try {
      sheet.addRule(selector, rule, 0);
    } catch(err) {
      console.error(err); // eslint-disable-line
      throw err;
    }
  }
}
