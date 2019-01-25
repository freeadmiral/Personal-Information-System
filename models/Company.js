const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name: {
        type: String,
    }
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;