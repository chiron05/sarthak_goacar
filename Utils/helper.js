const httpStatusCodes = require("../constants/http-status-codes");

exports.formResponse = (code, data) => {
    return {
        status_code: code,
        flag: httpStatusCodes[code].flag,
        message: httpStatusCodes[code].message,
        data: data
    }
};