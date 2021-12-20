const fs = require('fs');

const writeReadme = (content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', content, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'file created'
            });
            console.log('README generated! Please open the current foler to see your new README.md file')
        });
    });
};

module.exports = writeReadme;