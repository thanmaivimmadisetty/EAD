const fs = require('fs'); 

fs.writeFile('IT-2.txt', 'Welcome', (err) => { 
    if (err) { 
        console.log('Error writing file:', err); 
    } else { 
        console.log('File written successfully'); 
    } 
}); 

fs.readFile('IT-2.txt', 'utf-8', (err, data) => { 
    if (err) { 
        console.log('Error reading file:', err); 
    } else { 
        console.log('File read successfully'); 
        console.log(data); 
    } 
}); 

fs.appendFile('IT-2.txt', ' to Node.js', (err) => { 
    if (err) { 
        console.log('Error appending file:', err); 
    } else { 
        console.log('File appended successfully'); 
    } 
}); 

fs.appendFile('IT-2.txt', ' and Express.js', (err) => { 
    if (err) { 
        console.log('Error appending file:', err); 
    } else { 
        console.log('File appended successfully'); 
    } 
});