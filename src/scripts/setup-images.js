const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create a placeholder text file to remind about image placement
const placeholderContent = `Please add the following images to this directory:

1. logo.png - The María Isabel Tequila logo
2. agave-field.jpg - Background image of the agave field
3. bottle-beach.jpg - Tequila bottle on the beach
4. cactus.jpg - Agave cactus close-up

Image specifications:
- logo.png: 120x120px minimum, transparent background
- Other images: 1920x1080px minimum, high quality
`;

fs.writeFileSync(path.join(publicDir, 'IMAGES.txt'), placeholderContent); 