export const setSession = (user, role) => {
  sessionStorage.setItem("user", user);
  sessionStorage.setItem("role", role);
};

export const getRole = () => {
  return sessionStorage.getItem("role");
};

export const isAdmin = () => {
  return getRole() === "ADMIN";
};

export const isUser = () => {
  return getRole() === "USER";
};

export const logout = () => {
  sessionStorage.clear();
  window.location.href = "/";
};