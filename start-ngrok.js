
const ngrok = require('ngrok');
const http = require('http');

(async function() {
  try {
    const url = await ngrok.connect(3001);
    console.log('Ngrok tunnel created:', url);
    console.log('Ctrl+C to exit');

    // Keep the script running
    await new Promise(() => {});
  } catch (err) {
    console.error('Error:', err);
  }
})();
