export const signinMock = (email: string, password: string) => {
  if (email !== "demo@gmail.com" || password !== "demo") {
    return false;
  }

  return true;
};
