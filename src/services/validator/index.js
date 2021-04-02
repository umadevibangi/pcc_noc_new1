import { forEach } from "lodash";

import isEmpty from "./isEmpty";
import isNotEmail from "./isNotEmail";
import isMaxLength from "./isMaxLength";
import isMinLength from "./isMinLength";
import isNumeric from "./isNumeric";
import isPhoneNumber from "./isPhoneNumber";
import isMobileNumber from "./isMobileNumber";
import isFaxNumber from "./isFaxNumber";
import isAlphabets from "./isAlphabets";
import isDecimal from "./isDecimal";
import noDiff from "./noDiff";
import isAlphaNumeric from "./isAlphaNumeric";
import isPercentage from "./isPercentage";
import isCommaSeparated from "./isCommaSeparated";
import isNotWithinRange from "./isNotWithinRange";
import isDecimalWithMaxLength from "./isDecimalWithMaxLength";
import isAlphanumericWithFewSpecialChar from "./isAlphanumericWithFewSpecialChar";
import isPinCode from "./isPinCode";
import isStdCode from "./isStdCode";
import noSpace from "./noSpace";
import isPhoneNumberWithoutCode from "./isPhoneNumberWithoutCode";
import isAlphanumericWithHyphen from "./isAlphanumericWithHyphen";
import isDateGreater from "./isDateGreater";
import isVehicleNumber from "./isVehicleNumber";
import isPassword from "./isPassword";
import isSame from "./isSame";

import {
  NOT_EMPTY,
  EMAIL_FORMAT,
  MIN_LENGTH,
  NUM_ONLY,
  PHONE_NUMBER,
  SHOULD_MATCH,
  ALPHABETS,
  NOT_NUMBER,
  PERCENTAGE_VALIDATION,
  NOT_DECIMAL,
  MAX_LENGTH,
  SHOULD_BE_GREATER,
  NO_SAME_VALUES,
  ALPHANUMERIC,
  VEHICLENUMBER,
  COMMA_SEPARATED,
  NOT_IN_RANGE,
  SHOULD_BE_GREATER_OR_EQUAL,
  ALPHANUMERIC_WITH_SPECIAL_CHAR,
  MOBILE_NUMBER,
  FAX_NUMBER,
  PIN_CODE,
  STD_CODE,
  NO_SPACE,
  PHONE_WITHOUT_CODE,
  ALPHANUMERIC_WITH_HYPHEN,
  SHOULD_BE_LESS_OR_EQUAL,
  DATE_NOT_GREATER,
  PASSWORD,
  NOT_SAME
} from "./errorMsgConst";

function runChecks(data, rule, value) {
  if (rule.required && isEmpty(value)) {
    return NOT_EMPTY;
  }

  if (rule.email && isNotEmail(value) && !isEmpty(value)) {
    return EMAIL_FORMAT;
  }

  if (rule.number && !isEmpty(value) && isNaN(value)) {
    return NOT_NUMBER;
  }

  if (
    rule.phoneWithoutCode &&
    isPhoneNumberWithoutCode(value) &&
    value !== ""
  ) {
    return PHONE_WITHOUT_CODE;
  }

  if (rule.minLength && isMinLength(value, rule.minLength)) {
    return `${MIN_LENGTH} ${rule.minLength}`;
  }

  if (rule.maxLength && isMaxLength(value, rule.maxLength)) {
    return `${MAX_LENGTH} ${rule.maxLength}`;
  }

  if (rule.numeric && value !== "" && isNumeric(value)) {
    return NUM_ONLY;
  }

  if (rule.phone && isPhoneNumber(value) && value !== "") {
    return PHONE_NUMBER;
  }

  if (rule.mobile && isMobileNumber(value) && value !== "") {
    return MOBILE_NUMBER;
  }

  if (rule.fax && isFaxNumber(value) && value !== "") {
    return FAX_NUMBER;
  }

  if (rule.shouldMatch && value !== data[rule.shouldMatch]) {
    return SHOULD_MATCH;
  }

  if (rule.alphabets && isAlphabets(value)) {
    return ALPHABETS;
  }

  if (rule.noSpace && noSpace(value)) {
    return NO_SPACE;
  }

  if (rule.decimal && isDecimal(value)) {
    return NOT_DECIMAL;
  }

  if (rule.diffFrom && noDiff(value, data[rule.diffFrom])) {
    return NO_SAME_VALUES;
  }

  if (rule.alphanumeric && isAlphaNumeric(value)) {
    return ALPHANUMERIC;
  }
  if (rule.vehiclenumber && isVehicleNumber(value)) {
    return VEHICLENUMBER;
  }

  if (rule.pincode && isPinCode(value) && value !== "") {
    return PIN_CODE;
  }

  if (rule.stdcode && isStdCode(value) && value !== "") {
    return STD_CODE;
  }

  if (rule.commaSepratedString && isCommaSeparated(value)) {
    return COMMA_SEPARATED;
  }

  if (rule.range && isNotWithinRange(value, rule.range)) {
    return `${NOT_IN_RANGE} ${rule.range.min} and ${rule.range.max}`;
  }

  if (rule.minValue && value !== "" && Number(value) < Number(rule.minValue)) {
    return `${SHOULD_BE_GREATER_OR_EQUAL} ${rule.minValue}`;
  }

  if (rule.isPercentageApplicable && !isPercentage(value)) {
    return PERCENTAGE_VALIDATION;
  }

  if (
    rule.decimalWithMaxLength &&
    !isDecimalWithMaxLength(value, rule.decimalWithMaxLength) &&
    value !== ""
  ) {
    return `${MAX_LENGTH} ${rule.decimalWithMaxLength} digits and 2 decimals.`;
  }

  if (
    rule.isGreaterThan !== undefined &&
    Number(value) <= Number(rule.isGreaterThan) &&
    value !== null
  ) {
    return `${SHOULD_BE_GREATER} ${rule.isGreaterThan}`;
  }

  if (
    rule.alphanumericwithspecialchar &&
    isAlphanumericWithFewSpecialChar(value)
  ) {
    return ALPHANUMERIC_WITH_SPECIAL_CHAR;
  }

  if (rule.alphanumericWithHyphen && isAlphanumericWithHyphen(value)) {
    return ALPHANUMERIC_WITH_HYPHEN;
  }

  if (
    (rule.maxValue && Number(value) > Number(rule.maxValue)) ||
    (rule.maxValue && Number(value) === 0)
  ) {
    return `${SHOULD_BE_LESS_OR_EQUAL} ${rule.maxValue}`;
  }

  if (
    rule.isDateGreater &&
    isDateGreater(
      value,
      data[rule.isDateGreater.key],
      rule.isDateGreater.canBeSame
    )
  ) {
    return DATE_NOT_GREATER(
      rule.isDateGreater.field,
      rule.isDateGreater.canBeSame
    );
  }

  if (rule.isSame && isSame(value, data[rule.isSame])) {
    return NOT_SAME(rule.isSame);
  }

  if (rule.password && isPassword(value) && !isEmpty(value)) {
    return PASSWORD;
  }

  return "";
}

export default function validator(rules) {
  return function validate(data) {
    const errors = {};

    forEach(data, (value, key) => {
      if (rules[key]) {
        errors[key] = runChecks(data, rules[key], value);
      }
    });

    return errors;
  };
}
