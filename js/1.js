// Получаем все ссылки с атрибутом href, начинающимся с "#"
const anchors = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function (event) {
    event.preventDefault();
    // Получаем id целевого элемента
    const targetId = this.getAttribute('href');
    // Получаем целевой элемент
    const targetElement = document.querySelector(targetId);
    // Прокручиваем к целевому элементу с анимацией
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
}