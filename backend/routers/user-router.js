const {Router} = require('express');
const router = Router();

const {post, getForId, putForId, getForName, deleteForID} = require('../controllers/user-controllers');


router.route('/post')
    post(post)
router.route('/id/:id')
    get(getForId)
    put(putForId)
    delete(deleteForI)
router.route('name/:name')
    .get(getForName)
module.exports = router;