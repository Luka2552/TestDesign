const variations = [
  {
    backgroundImage: 'images/middle-picture.avif',
    title: 'კომპანია რომელიც ზრუნავს შენზე',
    description:
      'ჩვენი სერვისები არის მრავალფეროვანი და მორგებული მომხმარებელზე',
    buttonText: 'ღილაკი 1',
  },
  {
    backgroundImage: 'images/middle-picture2.avif',
    title: 'კომპანია რომელიც ზრუნავს შენზე 2',
    description:
      'ჩვენი სერვისები არის მრავალფეროვანი და მორგებული მომხმარებელზე 2',
    buttonText: 'ღილაკი 2',
  },
  {
    backgroundImage: 'images/middle-picture3.avif',
    title: 'კომპანია რომელიც ზრუნავს შენზე 3',
    description:
      'ჩვენი სერვისები არის მრავალფეროვანი და მორგებული მომხმარებელზე 3',
    buttonText: 'ღილაკი 3',
  },
];

let currentVariationIndex = 0;
let intervalId;

function updateContent() {
  const variation = variations[currentVariationIndex];
  document.getElementById('backgroundImg').src = variation.backgroundImage;
  document.getElementById('title').textContent = variation.title;
  document.getElementById('description').textContent = variation.description;
  document.getElementById('btn').textContent = variation.buttonText;

  // ბარების გათეთრება
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    if (index <= currentVariationIndex) {
      bar.classList.add('filled');
    } else {
      bar.classList.remove('filled');
    }
  });

  // შემდეგ ინტერვალზე გადასვლა
  currentVariationIndex++;

  if (currentVariationIndex === variations.length) {
    clearInterval(intervalId);
  }
}

updateContent();

// ყოველ 3 წამში ერთხელ იცვლება კონტენტი
intervalId = setInterval(updateContent, 3000);
