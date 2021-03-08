const getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showAlert('Не удалось загрузить данные с сервера :(');
    })
    .then(onSuccess)
    .catch(onError);
};

export {getData};
