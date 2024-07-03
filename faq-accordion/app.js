const titles = document.querySelectorAll('.question');

titles.forEach((title) => {
  title.addEventListener('click', (e) => {
    const answer = title.nextElementSibling;
    const img = title.querySelector('.icon img');

    if (answer && answer.classList.contains('answer')) {
      if (answer.classList.contains('on')) {
        answer.classList.remove('on');
        img.src = `./assets/images/icon-plus.svg`;
      } else {
        document.querySelectorAll('.answer.on').forEach((otherAnswer) => {
          otherAnswer.classList.remove('on');
          const otherImg =
            otherAnswer.previousElementSibling.querySelector('.icon img');
          otherImg.src = `./assets/images/icon-plus.svg`;
        });
        answer.classList.add('on');
        img.src = `./assets/images/icon-minus.svg`;
      }
    }
  });
});

const adjustContent = () => {
  let alertDiv = document.querySelector('.alert');

  if (window.innerWidth < 375) {
    if (!alertDiv) {
      alertDiv = document.createElement('div');
      alertDiv.classList.add('alert');
      alertDiv.innerHTML = `<div>화면 너비를 375이상 조절해주세요.</div>`;
      document.body.appendChild(alertDiv);
    }
  } else {
    if (alertDiv) {
      alertDiv.remove();
    }
  }
};

adjustContent();

window.addEventListener('resize', adjustContent);
