// Inisialisai express router
let router = require('express').Router();

router.get('/', function(req, res) {
	res.json({
		status: 'API sudah berjalan',
		message: 'REST API sederhana with nodejs',
	});
});

var contactController = require('./contactController');

router
	.route('/contact')
	.get(contactController.index)
	.post(contactController.new);

router
	.route('/contact/:contact_id')
	.get(contactController.view)
	.patch(contactController.update)
	.put(contactController.update)
	.delete(contactController.delete);

// Export API routes
module.exports = router;
