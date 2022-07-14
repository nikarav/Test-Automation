const {setDefaultTimeout} = require("cucumber");

export const stepTimeOut = 90000;
export const waitTimeOutValue = 55000;

const defaultTimeOut = 60000;
setDefaultTimeout(defaultTimeOut);