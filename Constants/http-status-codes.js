const httpStatusCodes = {
    200: {
        code: 200,
        flag: "OK",
        message: "Process Successful"
    },
    201: {
        code: 201,
        flag: "Created",
        message: "Created Successful"
    },
    202: {
        code: 202,
        flag: "Not created",
        message: "Could not create"
    },
    204: {
        code: 204,
        flag: "No content",
        message: "Server processed request successfully and there is no content to return"
    },
    400: {
        code: 400,
        flag: "Bad Request",
        message: "The Server could not process the request due to be bad syntax"
    },
    401: {
        code: 401,
        flag: "Unauthorized",
        message: "Unauthorized access"
    },
    403: {
        code: 403,
        flag: "Forbidden",
        message: "Forbidden Request"
    },

    404: {
        code: 404,
        flag: "Not found",
        message: "The request resource could not be found"
    },
    498:{
        code: 498,
        flag: "Invalid Token",
        message: "Token Invalid or Expired"
    },
    500: {
        code: 500,
        flag: "Internal Server error",
        message: "An Internal Server error occured"
    },
};

module.exports = httpStatusCodes;