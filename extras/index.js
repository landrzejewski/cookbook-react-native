const Express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')

const app = Express()
app.use(bodyParser.json())

const Storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './public/images')
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
})

const upload = multer({ storage: Storage });

app.post('/upload', upload.array('photo', 3), (req, res) => {
    const fileName = req.files[0].filename;
    res.status(200).json({fileName});
});

app.listen(3001, () => {
    console.log('App running on http://localhost:3001');
});
