const greetingAnimation = () => {
  const container = document.querySelector('.greeting__title');
  const subContent = document.querySelector('.greeting__sub-content');
  const text = 'Привет. Меня зовут Мария, и я Front-end Developer';

  const cursor = document.createElement('span');
  cursor.textContent = '|';

  let stringChar = '';

  const addChar = (id) => {
    setTimeout(() => {
      stringChar += text[id];
      container.textContent = stringChar;
      container.append(cursor);
      if (id === text.length - 4)
        subContent.classList.remove('greeting__sub-content--hidden');
    }, 80 * id);
  };

  for (let i = 0; i < text.length; i++) {
    addChar(i);
  }
};

export default greetingAnimation;
