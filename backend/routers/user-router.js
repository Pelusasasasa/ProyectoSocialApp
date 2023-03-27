const {Router} = require('express');
const router = Router();

const {post, getForId, putForId, getForName} = require('../controllers/user-controllers');


router.route('/post')
    post(post)
router.route('/id/:id')
    get(getForId)
    put(putForId)
router.route('name/:name')
    .get(getForName)
module.exports = router;