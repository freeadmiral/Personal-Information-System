const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    companyName: {
        type: String,
    }
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;