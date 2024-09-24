const fs = require('fs').promises;
 
const loadLocalImage = async () => {
  const imageData = await fs.readFile('/image.png');
  // Process image data
};