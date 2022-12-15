const postForm = () => {
  const form = document.querySelector('.contact__form');

  console.log('hi from post form');
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
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
};

export default postForm;
