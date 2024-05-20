const express = require("express")
const router = express.Router()
 
const Sentry = require('@sentry/node');
Sentry.setupExpressErrorHandler(router);

router.get("/", async (req, res) => {
 res.render('../views/dashboard/index.ejs')
})

module.exports = router