module.exports = class HandleError {
  constructor(
    message,
    statusCode = 400,
    error = 'Bad Request',
    ) {
    this.statusCode = statusCode;
    this.error = error;
    this.message = message;
  }

  responseError() {
    return {
      statusCode: this.statusCode,
      error: this.error,
      message: this.message,
    };
  }
};
