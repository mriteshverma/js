const fs = require('fs')
const superagent = require('superagent')
/**
 * Promise are used to transform the code structure of data to pervent nesting.
 * Promise we can use with either then and catch or async in both ways.
 * then always accept success data. catch always accept err data.
 * than is kind of chain. we don't need to use then inside then it will automatically return the response
 * to next then.
 */
const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('i could not find a file.😒')
            resolve(data)
        })
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('could not write file.😒')
            resolve(data)
        })
    })
}

// readFilePro('text.txt')
//     .then(res => {
//         return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`);
//     })
//     .then(res => {
//         return writeFilePro('readthis.txt', res.body.message)
//     })
//     .then(res => console.log(res))
//     .catch(err => {
//         console.log(err)
//     })

// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then(res => {
//             fs.writeFile('readthis.txt', res.body.message, err => {
//                 console.log('file read done.');
//             })
//         }).catch(err => {
//             console.log(err.message);
//         })
// })

const getDogPic = async () => {
    try {
        const data = await readFilePro('text.txt');
        console.log(`Breed: ${data}`)

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message)

        await writeFilePro('readthis.txt', res.body.message);
        console.log('file write done.');

        return '2 Ready 😍';
    } catch (err) {
        console.log(err);
    }
}
// console.log('1: first');
// getDogPic()
//     .then(x => {
//         console.log(x);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// console.log('3: last');

// (async () => {
//     try {
//         const x = await getDogPic();
//         console.log(x, 'test');
//     } catch (err) {
//         console.log(err);
//     }
// })();

(async () => {
    const res1 = superagent.get(`https://dog.ceo/api/breed/african/images/random`);
    const res2 = superagent.get(`https://dog.ceo/api/breed/african/images/random`);
    const res3 = superagent.get(`https://dog.ceo/api/breed/african/images/random`);
    const resall = await Promise.all([res1, res2, res3]);
    
    const all = resall.map(el => el.body.message).join(', ')
    console.log(all);
})()