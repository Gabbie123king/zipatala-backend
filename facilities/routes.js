const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getFacilities)
router.post("/addDistrict", controller.addDistrict)
router.get("/districts", controller.getDistricts)
router.post("/addOwner", controller.addOwner)
router.get("/Owners", controller.getOwners)
router.post("/addFacility", controller.addFacility)

module.exports = router;