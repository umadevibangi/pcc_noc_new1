export const NOT_EMPTY = "You can't leave this empty.";
export const EMAIL_FORMAT = "Please enter a valid Email.";
export const NOT_NUMBER = "Please enter only numeric value.";
export const MIN_LENGTH = "Length should not be less than ";
export const MAX_LENGTH = "Length should not be greater than ";
export const NUM_ONLY = "Please enter only numeric value.";
export const PHONE_NUMBER = "Please enter 7 digit Phone Number.";
export const PHONE_WITHOUT_CODE = "Please enter 10 digit Phone Number.";
export const MOBILE_NUMBER = "Please enter 10 digit Mobile Number.";
export const FAX_NUMBER = "Please enter 7 digit Fax Number.";
export const PIN_CODE = "Please enter 6 digit Pin Code.";
export const STD_CODE = "Please enter STD Code with 2 to 8 digits.";
export const SHOULD_MATCH = "These passwords don't match.";
export const ALPHABETS = "Please enter only alphabets.";
export const NOT_DECIMAL = "Please enter a valid integer or a decimal.";
export const SHOULD_BE_GREATER = "Should be greater than";
export const SHOULD_BE_GREATER_OR_EQUAL = "Should be greater than or equal to";
export const NO_SAME_VALUES = "values cant be same.";
export const ALPHANUMERIC = "Please enter a valid alpha numeric value.";
export const VEHICLENUMBER = "Please enter a valid vehicle number";
export const COMMA_SEPARATED = "Please enter alphabets and comma only.";
export const NOT_IN_RANGE = "Please enter a number between";

export const SERVER_ERROR = "Something went wrong. Please try after sometime.";
export const PERCENTAGE_VALIDATION = "Please enter a number between 0 and 100.";
export const NO_SPACE = "Spaces are not allowed";

export const VALUE_CANNOT_BE_GREATER = "Value cannot be greater than ";
export const DUPLICATE_ENTRY = "Duplicate entry not allowed";

export const ALPHANUMERIC_WITH_SPECIAL_CHAR =
  "Please enter a valid alphanumeric value. You can use - and %";
export const ALPHANUMERIC_WITH_HYPHEN =
  "Please enter a valid alphanumeric value. You can use -";

export const SHOULD_BE_LESS_OR_EQUAL = "Should be between 1 and";
export const BETWEEN_ONE_AND_HUNDRED = "Should be between 1 and 100";
export const DATE_DIFFERENCE =
  "Difference between the selected dates should be 30days";
export const DATE_NOT_GREATER = (field, canBeSame) =>
  `Should be ${canBeSame ? "greater than or" : ""} equal to ${field}`;

export const PASSWORD =
  "Should have atleast 1 of each (uppercase, lowercase, special character & digit)";

export const NOT_SAME = field => `Should be same as ${field}`;
