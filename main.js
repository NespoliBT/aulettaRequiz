document.addEventListener("DOMContentLoaded", () => {
  const questionsElR = document.querySelector("#questions");
  const resultEl = document.querySelector(".result");
  const result = document.querySelector("#result");

  let points = [0, 0, 0, 0];

  const questions = [
    {
      question: "GENERE",
      answers: ["Persona Trans Binaria", "Nonbinary", "Uomo Cis", "Donna Cis"],
    },
    {
      question: "COLORE PREFERITO",
      answers: [
        "Verde Leghista",
        "Rosso Compagno",
        "Arancione Sibbino",
        "Blu Ciellino",
      ],
    },
    {
      question: "ANIMALE PREFERITO",
      answers: [
        "Rettile a Caso",
        "Un qualche Tipo di Ratto",
        "Animale In Via Di Estinzione",
        "Cane / Gatto",
      ],
    },
    {
      question: "SESSUALITA’",
      answers: [
        "Eterosessuale",
        "Bi / Pan / Ace / Sapiosessuale / etc",
        "Boh?",
        "Omosessuale",
      ],
    },
    {
      question: "GENERE MUSICALE PREFERITO",
      answers: ["Rock Pretenzioso", "Video ASMR", "Pop", "Rap / Trap"],
    },
    {
      question: "DOVE VAI IN VACANZA?",
      answers: ["Montagna", "Mare", "Città", "Lago / Fiume / Collina"],
    },
    {
      question: "PICK YOUR POISON (STUPID EDITION)",
      answers: [
        "Discutere con i Ciellini",
        "Fare SDE e Sperare di Trovare Un Lavoro",
        "Fare un Corso di Studi Pseudo-Matematico con dislessia / discalculia",
        "Pausa Siga ogni 25 minuti",
      ],
    },
    {
      question: "PICK YOUR POISON (SERIOUS EDITION)",
      answers: [
        "Tavernello / Droghe Pesanti",
        "Birra a 70 cent del Carrefour",
        "La Maria alle 4:20",
        "Vodka Bicentenaria dell’Auletta",
      ],
    },
    {
      question: "INDUMENTO PREFERITO DA INDOSSARE IN AULETTA",
      answers: [
        "Maglietta Galassina",
        "Camicia Stilosa",
        "Ciabatta Ignorante",
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
        "Galleria / Biblioteca",
        "Casa mia",
        "Studio? No grazie",
      ],
    },
    {
      question: "CAFFE PREFERITO",
      answers: [
        "Cioccolata con 5 di zucchero",
        "Macchiato / Cappuccino",
        "Espresso",
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
      points[0] >= points[1] &&
      points[0] >= points[2] &&
      points[0] >= points[3]
    ) {
      personality = "Biocos*";
    }
    if (
      points[1] >= points[0] &&
      points[1] >= points[2] &&
      points[1] >= points[3]
    ) {
      personality = "Caso Umanistico";
    }
    if (
      points[2] >= points[0] &&
      points[2] >= points[1] &&
      points[2] >= points[3]
    ) {
      personality = "Informatic* Munit* Di Programming Socks";
    }
    if (
      points[3] >= points[0] &&
      points[3] >= points[1] &&
      points[3] >= points[2]
    ) {
      personality = "Pseudoscienziat*";
    }

    resultEl.classList.add("open");
    result.innerHTML = personality;
  });
});
