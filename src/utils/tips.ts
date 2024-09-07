export interface PasswordTip {
  text: string;
  key: string;
}

export const passwordTips: PasswordTip[] = [
  { text: "At least 8 characters", key: "length" },
  { text: "At least 1 uppercase letter", key: "uppercase" },
  { text: "At least 1 lowercase letter", key: "lowercase" },
  { text: "At least 1 number", key: "number" },
  { text: "At least 1 special character", key: "specialChar" },
];