const { create } = require("axios").default;

// Config
const axiosConfig = create({
    baseURL: 'https://gimmeproxy.com',
});
const { get, post } = axiosConfig;

async getProxy() {
  const result = await get('/api/getProxy?get=true&supportsHttps=true&protocol=http&maxCheckPeriod=3600&minSpeed=50').catch(error => error.response);
  return result.data;
}

module.exports = {
  getProxy
}
