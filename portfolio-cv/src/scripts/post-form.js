const postForm = () => {
  const form = document.querySelector('.contact__form');
  const modalWindow = document.querySelector('.modal-window');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.modal-window__close');

  function serializeForm(formNode) {
    const { elements } = formNode;

    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element;
        return { name, value };
      });

    return data;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = serializeForm(form);
    const text = formData.map((item) => `${item.name}: ${item.value}`);

    fetch('https://formsubmit.co/ajax/b4677f3bce9fc1ece571f42b59de0170', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: `${formData[1].value}`,
        message: `${text.join('\n')}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        modalWindow.classList.add('modal-window--open');
        overlay.classList.remove('overlay--hidden');
      })
      .catch((error) => console.log(error));
  });

  closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal-window--open');
    overlay.classList.add('overlay--hidden');
  });
};

export default postForm;
