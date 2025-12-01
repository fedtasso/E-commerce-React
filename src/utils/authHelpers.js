export const getAllUsers = async (API_URL_USERS) => {
  const response = await fetch(API_URL_USERS);
  if (!response.ok) throw new Error("Error en la petición");

  return await response.json()
};


export const userExist = (allUsers, credentials) => {
  //filtrar usuario por email
  const userData = allUsers.find(
    (user) => user.email === credentials.email.trim().toLowerCase()
  );
  // verificar usuario
  if (!userData) throw new Error("Usuario no encontrado");

  return userData;
};


export const userNotExist = (allUsers, credentials) => {
  //filtrar usuario por email
  const userData = allUsers.find(
    (user) => user.email === credentials.email.trim().toLowerCase()
  );
  // verificar usuario
  if (userData) throw new Error("El mail ya está registrado");

  return userData;
};