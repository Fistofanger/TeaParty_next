const router = require('express').Router();
const upload = require('../../utils/multer');

const TeaCard = require('../../components/TeaCard.jsx');

const { Tea, Comment } = require('../../db/models');

router.post('/', upload.single('teaImg'), async (req, res) => {
    try {
        const { id } = res.locals.user;
        const { teaName, teaType, teaLocation, teaRegion, teaDescription } =
            req.body;

        const newFileUrl = `/img/${req.file.originalname}`;

        const post = await Tea.create({
            teaName,
            teaImg: newFileUrl,
            teaType,
            teaLocation,
            teaRegion,
            teaDescription,
            userId: id,
        });

        const TeaWithCommentFromDB = await Tea.findOne({
            where: { userId: id },
            include: { model: Comment },
            order: [['id', 'DESC']],
        });

        const card = res.renderComponent(
            TeaCard,
            { teaData: TeaWithCommentFromDB },
            { doctype: false }
        );

        if (post) {
            res.status(201).json({ message: 'success', card });
            return;
        }
        res.status(400).json('Ошибка добавления');
    } catch ({ message }) {
        res.status(500).json('Ошибочка');
    }
});

router.delete('/:teaId', async (req, res) => {
    try {
        const { teaId } = req.params;

        const result = await Tea.destroy({
            where: { id: teaId, userId: res.locals.user.id },
        });
        if (result) {
            res.status(200).json({ message: 'success' });
        }
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
});

router.put('/update/:teaId', upload.single('teaImg'), async (req, res) => {
    try {
        const { teaId } = req.params;
        const { teaName, teaType, teaLocation, teaRegion, teaDescription } =
            req.body;

        const newFileUrl = `/img/${req.file.originalname}`;

        const result = await Tea.update(
            {
                teaName,
                teaImg: newFileUrl,
                teaType,
                teaLocation,
                teaRegion,
                teaDescription,
            },
            { where: { id: teaId, userId: res.locals.user.id } }
        );

        if (result[0]) {
            res.status(200).json({ message: 'success' });
        }
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
});

module.exports = router;
