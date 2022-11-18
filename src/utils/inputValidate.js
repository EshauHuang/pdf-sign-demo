const errorMessage = {
  required: (label = "此欄位") => `${label}為必填項目`,
  email: "請輸入有效的電子郵件",
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

export function inputValidate({ label, value, rules = [], allError = false }) {
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
}

// const email = {
//   label: "簽署人姓名",
//   value: "",
//   rules: ["required", "email"],
// };

// inputValidate(email);
