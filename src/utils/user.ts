export const validateEmailCondition = (email: string) => {
  const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (EMAIL_REGEX.test(email)) {
    return true;
  }
  return false;
};

export const validatePasswordCondition = (password: string) => {
  const PASSWORD_MINIMUM_LENGTH = 8;

  if (password.length >= PASSWORD_MINIMUM_LENGTH) {
    return true;
  }
  return false;
};
