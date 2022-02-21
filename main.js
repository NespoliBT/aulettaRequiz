document.addEventListener("DOMContentLoaded", () => {
  const questionsElR = document.querySelector("#questions");

  let points = [0, 0, 0, 0];

  const questions = [
    {
      question: "GENERE",
      answers: ["Uomo Cis", "Nonbinary", "Donna Cis", "Persona Trans Binaria"],
    },
    {
      question: "COLORE PREFERITO",
      answers: [
        "Rosso Compagno",
        "Blu Ciellino",
        "Verde Leghista",
        "Arancione Sibbino",
      ],
    },
    {
      question: "ANIMALE PREFERITO",
      answers: [
        "Cane/Gatto",
        "Rettile a Caso",
        "Un qualche Tipo di Ratto",
        "Animale In Via Di Estinzione",
      ],
    },
    {
      question: "SESSUALITA’",
      answers: [
        "Omosessuale",
        "Eterosessuale",
        "Bi/Pan/Ace/Sapiosessuale/etc",
        "Boh?",
      ],
    },
    {
      question: "GENERE MUSICALE PREFERITO",
      answers: ["Rap/Trap", "Rock Pretenzioso", "Pop", "Video ASMR"],
    },
    {
      question: "DOVE VAI IN VACANZA?",
      answers: ["Mare", "Montagna", "Lago/Fiume/Collina", "Città"],
    },
    {
      question: "PICK YOUR POISON (STUPID EDITION)",
      answers: [
        "Pausa Siga ogni 25 minuti",
        "Fare un Corso di Studi Pseudo-Matematico con dislessia/discalculia",
        "Fare SDE e Sperare di Trovare Un Lavoro",
        "Discutere con i Ciellini",
      ],
    },
    {
      question: "PICK YOUR POISON (SERIOUS EDITION)",
      answers: [
        "La Maria alle 4:20",
        "Birra a 70 cent del Carrefour",
        "Vodka Bicentenaria dell’Auletta",
        "Tavernello/Droghe Pesanti",
      ],
    },
    {
      question: "INDUMENTO PREFERITO DA INDOSSARE IN AULETTA",
      answers: [
        "Camicia Stilosa",
        "Ciabatta Ignorante",
        "Maglietta Galassina",
        "Felpa Nerdina",
      ],
    },
    {
      question: "SCEGLI UN OGGETTO DELL’AULETTA",
      answers: [
        "La Mappa Della Metro Verde",
        "La Scatola Delle Necessità",
        "La Stampante Posseduta dal Demonio",
        "La Playstation Che Sta Lì Da Un Anno",
      ],
    },
    {
      question: "LUOGO DI STUDIO PREFERITO",
      answers: [
        "In auletta",
        "Galleria/Biblioteca",
        "Casa mia",
        "Studio? No grazie",
      ],
    },
    {
      question: "CAFFE PREFERITO",
      answers: [
        "Espresso",
        "Macchiato/Cappuccino",
        "Cioccolata con 5 di zucchero",
        "Caffè da 50cent",
      ],
    },
  ];

  questions.map((question, j) => {
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");
    questionHTML = `<div class="title">${question.question}</div>`;
    question.answers.forEach(
      (a, i) =>
        (questionHTML += `
<label class="answer" for="${i + "" + j}">
    <input type="radio" name="question${j}" id=${i + "" + j} value="${i}" />
    <div class="answerLabel">${a}</div>
</label>
      `)
    );

    questionEl.innerHTML = questionHTML;
    questionsElR.appendChild(questionEl);
  });

  const submitEl = document.querySelector("#submit");
  submitEl.addEventListener("click", () => {
    let personality = "";
    const answers = document.querySelectorAll("input:checked");
    answers.forEach((a) => {
      points[a.value]++;
    });

    if (
      points[0] > points[1] &&
      points[0] > points[2] &&
      points[0] > points[3]
    ) {
      personality = "Biocoso";
    }
    if (
      points[1] > points[0] &&
      points[1] > points[2] &&
      points[1] > points[3]
    ) {
      personality = "Umanistici";
    }
    if (
      points[2] > points[0] &&
      points[2] > points[1] &&
      points[2] > points[3]
    ) {
      personality = "Informatici";
    }
    if (
      points[3] > points[0] &&
      points[3] > points[1] &&
      points[3] > points[2]
    ) {
      personality = "Pseudoscienziati";
    }
  });
});
