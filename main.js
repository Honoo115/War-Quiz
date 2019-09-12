const myQuiz = {
  questions: [
    {
      q:
        "At what battle were Allied troops in France almost destroyed before more than 300,000 of them were successfully evacuated to Britain?",
      options: [
        "Battle of Naples",
        "Battle of Dunkirk",
        "Battle of Monte Cassino",
        "Battle of London Sound"
      ],
      correctIndex: 1,
      correctResponse: "Well done soldier.",
      incorrectResponse: "Incorrect. The answer is 'The Battle of Dunkirk'"
    },
    {
      q:
        " What Alaskan town, later made famous by a TV show about crab fishing, was attacked by Japanese planes in June of 1942?",
      options: ["Far Harbor", "Stika", "Dutch Harbor", "Kodiak"],
      correctIndex: 2,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        "Operation Compass, in 1940 and 1941, was a series of battles in which British forces gained large amounts of territory in North Africa. Who were they fighting against?",
      options: ["Germany", "France", "Spain", "Italy"],
      correctIndex: 3,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        "The Battle of the Netherlands in 1940 was notable for what battlefield innovation?",
      options: [
        "The use of paratroopers in a large-scale assault",
        "Largest Tank assault in history",
        "First use of mobile artillery as anti tank",
        " First underground troop assault network"
      ],
      correctIndex: 0,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q: "What was the codename for the Allied invasion of Normandy?",
      options: [
        "Operation Kingdom",
        "Operation Asgard",
        "Operation Valhalla",
        "Operation Overlord"
      ],
      correctIndex: 3,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        "What Pacific naval battle is considered the turning point in the Pacific war and one of the most significant naval battles in history?",
      options: [
        "The Battle of Midway",
        "The Battle of Bikini Atoll",
        "The battle of Philipines",
        "The Battle of Oahu"
      ],
      correctIndex: 0,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        " On August 18, 1940, British and German planes battled in the skies over England, resulting in the greatest single day losses for both air forces. How do the British refer to this one-day air battle?",
      options: [
        "The Longest Day",
        "The Day We Fought",
        "The Hardest Day",
        "Black Sunday"
      ],
      correctIndex: 2,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        "Plans for the Dieppe Raid were seemingly transmitted in plain sight to the Germans using what?",
      options: [
        "Large letters written on the Dover countryside only visible from the air",
        "Morse code through nock and rock sound in back allys and restrooms",
        " A crossword puzzle in 'The Daily Telegraph' newspaper",
        "A Numberstation called the Liconshire Poacher in a church steeple"
      ],
      correctIndex: 2,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        "The Battle of Kursk, in which the Soviets repelled a massive German attack, is also notable for what reason?",
      options: [
        "The winning side suffered the most casualties",
        "The largest tank battle in history",
        "The first use of Blitzkrieg",
        "The largest civilian participation in a battle"
      ],
      correctIndex: 1,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    },
    {
      q:
        "The German siege of what Russian city resulted in the deaths of more than 1.5 million people due to starvation, extreme cold and artillery bombardment?",
      options: ["Leningrad", "Volgograd", "Moscow", "Saint Petersburg"],
      correctIndex: 0,
      correctResponse: "Custom correct response.",
      incorrectResponse: "Custom incorrect response."
    }
  ],
  queriesCorrect: 0,
  queryNumber: 0
};

$(function() {
  $("#startquiz-btn").on("click", function() {
    startQuiz();
  });
  $("#middle").on("click", ".opt", function(event) {
    event.preventDefault();
    submitAnswer($(this));
  });
  $("#next").on("click", function(event) {
    event.preventDefault();
    updateQuery(myQuiz);
  });
  let questionNumber = $(".qNumber");
  let questionCorrect = $(".qCorrect");
});

function startQuiz() {
  questionNumber = $("#end").addClass("hidden");
  $("#start").addClass("hidden");
  $("#middle").removeClass("hidden");
  updateQuery(myQuiz);
}

function updateQuery(appState) {
  $("#query").html(appState.questions[appState.queryNumber].q);
  $("#options").empty();
  let $queries = ``;
  for (
    let i = 0;
    i < appState.questions[appState.queryNumber].options.length;
    i++
  ) {
    $queries += `<button class="opt" data-index = "${i}">${appState.questions[appState.queryNumber].options[i]}</button>`;
  }
  $("#options").append($queries);
  $(`.qNumber`).text(myQuiz.queryNumber);
  $(`.qNumber`).text(myQuiz.queryNumber + 1);
}
function quizEnd() {
  $("#start").addClass("hidden");
  $("#middle").addClass("hidden");
  $("#end").removeClass("hidden");
  $(".restart").removeClass("hidden");
  $("#keeper").removeClass("hidden");
  handleRestart();
}
function handleRestart() {
  $(".restart").on("click", function() {
    $("#start").removeClass("hidden");
    $("#middle").addClass("hidden");
    $("#end").addClass("hidden");
    location.reload();
  });
}

function submitAnswer(chosenQuery) {
  ``;
  $("#next").removeClass("hidden");
  chosenQuery.addClass("selected");

  $(".opt")
    .attr("disabled", "disabled")
    .addClass("incor");

  let $options = $(".opt");
  let correctAwnser =
    $options[myQuiz.questions[myQuiz.queryNumber].correctIndex];
  $(correctAwnser)
    .addClass("cor")
    .removeClass("incor");

  $(".qCorrect").text(myQuiz.queriesCorrect);
  let selectedResponse = chosenQuery.data("index");
  let correctAnswer = myQuiz.questions[myQuiz.queryNumber].correctIndex;
  if (selectedResponse === correctAnswer) {
    myQuiz.queriesCorrect++;
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
  if (myQuiz.queryNumber === 9) {
    quizEnd();
  }
  $(`.qCorrect`).text(myQuiz.queriesCorrect + 0);
  myQuiz.queryNumber++;
}
