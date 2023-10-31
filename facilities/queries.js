const getFacilities = "SELECT * FROM facility";
const addDistrict = "INSERT INTO district(district_code, district_name) VALUES($1, $2) ";
const getDistricts = "SELECT * FROM district";
const addOwner = "INSERT INTO owner(owner_name) VALUES($1) ";
const getOwners = "SELECT * FROM owner";
const addFacility = "INSERT INTO facility(facility_code, facility_name, district_id, owner_id) VALUES($1, $2, $3, $4)";

module.exports = {
    getFacilities,
    addFacility,
    addDistrict,
    getDistricts,
    addOwner,
    getOwners,
}