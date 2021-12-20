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
                message: 'File created!'
            });
        });
    });
};

module.exports = writeReadme;