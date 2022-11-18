const errorMessage = {
  required: (label = "此欄位") => `${label}為必填項目`,
  email: "請輸入有效的電子信箱",
};

const validateRules = {
  required: (value) => !!value,
  email: (value) =>
    !!value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
};

export const getErrorMessage = (rule, label) =>
  typeof errorMessage[rule] === "function"
    ? errorMessage[rule](label)
    : errorMessage[rule];

export const inputValidate = ({
  label,
  value,
  rules = [],
  allError = false,
}) => {
  if (!rules.length) return "";

  let error = allError ? {} : "";

  if (allError) {
    error = rules.reduce((error, rule) => {
      // 已有錯誤訊息
      const isValid = validateRules[rule](value);

      if (!isValid) {
        return {
          ...error,
          [rule]: getErrorMessage(rule),
        };
      }

      return error;
    }, {});
  } else {
    rules.forEach((rule) => {
      // 已有錯誤訊息
      if (error) return;

      const isValid = validateRules[rule](value);

      if (!isValid) {
        error = getErrorMessage(rule, label);
      }
    });
  }

  return error;
};

export const formatInputAndValidateOptions = (inputObj, validateOptions) =>
  Object.keys(inputObj).reduce(
    (inputValidateOptions, name) => [
      ...inputValidateOptions,
      {
        ...validateOptions[name],
        name,
        value: inputObj[name],
      },
    ],
    []
  );

// const email = {
//   label: "簽署人姓名",
//   value: "",
//   rules: ["required", "email"],
// };

// inputValidate(email);
