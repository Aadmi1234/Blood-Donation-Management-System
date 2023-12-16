export const collectData = async (e) => {
  e.preventDefault();
  let result = await fetch("http://localhost:4000/", {
    method: "post",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });

  result = await result.json;
  localStorage.setItem("user", JSON.stringify(result));
};
