export var CommandType;
(function (CommandType) {
    CommandType["COLONIZATION"] = "COLONIZATION";
    CommandType["EXTERMINATION"] = "EXTERMINATION";
    CommandType["INFO"] = "INFO";
    CommandType["DEPOSIT"] = "DEPOSIT";
    CommandType["DEPOSIT_CLOSE"] = "DEPOSIT_CLOSE";
    CommandType["CREDIT"] = "CREDIT";
    CommandType["CREDIT_REPAY"] = "CREDIT_REPAY";
    CommandType["EXCHANGE"] = "EXCHANGE";
    CommandType["EXCHANGE_CANCEL"] = "EXCHANGE_CANCEL";
    CommandType["GET_EMBRYO"] = "GET_EMBRYO";
    CommandType["GET_VIRUS"] = "GET_VIRUS";
    CommandType["CHANGE_HULL"] = "CHANGE_HULL";
})(CommandType || (CommandType = {}));
