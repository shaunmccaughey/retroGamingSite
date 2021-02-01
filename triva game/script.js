function sendapirequest() {
  fetch(`https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   print out each question
      let question = document.getElementById("question");
      question.innerHTML = `${data.results[0].question}`;
      // combine the correct answer and incorrect answers, then randomly shuffle them
      let answers = [];
      answers = answers.concat(
        data.results[0].correct_answer,
        data.results[0].incorrect_answers
      );
      answers.sort(() => 0.5 - Math.random());
      // get answers assigned to a button
      let button = document.getElementsByClassName("answer");
      for (i = 0; i < button.length; i++) {
        button[i].innerHTML = answers[i];
      }
      correct_answer = data.results[0].correct_answer;
    })
    .catch((err) => console.log(err));
  localStorage.clear();
}

start = () => {
  // try and make start button disappear and have everything else appear
  document.getElementById("startbutton").style.visibility = "hidden";
  document.getElementById("grid").style.visibility = "visible";
  // start programme
  sendapirequest();
};

correct = () => {
  if (localStorage.getItem(correct_answer) === "1") {
    alert("correct answer");
  } else {
    alert("incorrect answer");
  }

  sendapirequest();
};
