export const HTTP_STATUS = {
    // Add the status codes you'll need
    // OK, CREATED, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR
    OK: 200,
    CREATED: 201,

    // Client error responses
    BAD_REQUEST: 400,
    NOT_FOUND: 404,

    // Server error responses
    INTERNAL_SERVER_ERROR: 500,
} as const;