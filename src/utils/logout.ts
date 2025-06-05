// src/utils/logout.ts
export async function logout(router: any) {
  await fetch("http://https://www.artihub.fr/auth/logout.php", {
    method: "POST",
    credentials: "include",
  });
  router.push("/espace-pro/login");
}
