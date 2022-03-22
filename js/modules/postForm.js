export const postForm = () => {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let formData = new FormData(form);
      let obj = {};
      formData.forEach((value, key) => {
        obj["formClassName"] = form.classList.value;
        obj[key] = value;
      });
      console.log(obj);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else throw new Error(response.status);
        })
        .then((data) => {
          alert("Данные успешно добавлены");
        })
        .catch((reject) => {
          alert("Данные отправлены с ошибкой" + reject.message);
        })
        .finally(() => {
          form.reset();
        });
    });
  });
};
