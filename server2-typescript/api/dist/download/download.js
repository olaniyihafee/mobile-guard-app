"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
const { MongoClient } = require('mongodb');
const getFile = async (req, res) => {
    let fileName = req.body.text1;
    await MongoClient.connect("mongodb://localhost:27017/juniper", async (err, client) => {
        if (err) {
            return res.render('index', {
                title: 'Uploaded Error',
                message: 'MongoClient Connection error', error: err.errMsg
            });
        }
        const db = client.db('juniper');
        const collection = await db.collection('photos.files');
        const collectionChunks = await db.collection('photos.chunks');
        collection.find({}).toArray(function (err, docs) {
            if (err) {
                return res.render('index', {
                    title: 'File error',
                    message: 'Error finding file',
                    error: err.errMsg
                });
            }
            if (!docs || docs.length === 0) {
                return res.render('index', {
                    title: 'Download Error',
                    message: 'No file found'
                });
            }
            else {
                collectionChunks.find({})
                    .sort({ n: 1 }).toArray(function (err, chunks) {
                    if (err) {
                        return res.render('index', {
                            title: 'Download Error',
                            message: 'Error retrieving chunks',
                            error: err.errmsg
                        });
                    }
                    if (!chunks || chunks.length === 0) {
                        return res.render('index', {
                            title: 'Download Error',
                            message: 'No data found'
                        });
                    }
                    let fileData = [];
                    for (let i = 0; i < chunks.length; i++) {
                        fileData.push(chunks[i].data.toString('base64'));
                    }
                    let finalFile = [];
                    for (let i = 0; i < fileData.length; i++) {
                        let theFile = 'data:' + docs[i].contentType + ';base64,'
                            + fileData.join('');
                        finalFile.push({
                            title: 'Image File',
                            message: 'Image loaded from MongoDB GridFS',
                            imgurl: theFile
                        });
                    }
                    res.send(finalFile);
                });
            }
        });
    });
};
exports.getFile = getFile;
//# sourceMappingURL=download.js.map