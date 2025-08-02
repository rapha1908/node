const fs = require('fs');
const path = require('path'); // Use o módulo 'path' nativo do Node.js

// Criar uma pasta
const testDir = path.join(__dirname, 'test');

try {
    if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir);
        console.log('Directory created successfully!');
    } else {
        console.log('Directory already exists!');
    }
} catch (err) {
    console.error('Error creating directory:', err);
}

// Criar um arquivo
fs.writeFile(path.join(testDir, 'test.html'), '<h1>Hello World!</h1>', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created successfully!');
});
