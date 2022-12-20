
  let questions = [
      {
        id: 1,
        question: "What is the probability of selecting the diamond suit from a deck of playing cards?",
        answer: "1/4",
        options: [
          "0/4",
          "3/4",
          "2/4",
          "1/4"
        ]
      },
      {
        id: 2,
        question: "If you flipped 2 coins, what is the probability that both will land on tails? ",
        answer: "1/4",
        options: [
            "0/4",
            "3/4",
            "1/4",
            "2/4"
            
        ]
      },
      {
        id: 3,
        question: "A lolly bag contains 2 red, 3 green and 2 blue gum balls. What is the probability of selecting a green one?",
        answer: "3/7",
        options: [
          "2/7",
          "3/7",
          "1/7",
          "4/7"
        ]
      },
      {
        id: 4,
        question: "If you flipped a coin, what is the probability it will land on heads?   ",
        answer: "1/2",
        options: [
          "3/4",
          "1/2",
          "2/2",
          "0/4"
        ]
      },
      {
        id: 5,
        question: " If you rolled a 6-sided dice, what is the probability of rolling a even number?",
        answer: "3/6",
        options: [
          "3/6",
          "2/6",
          "1/4",
          "2/4"
        ]
      },
      {
        id: 6,
        question: " A card is selected from a deck of playing cards. What is the probability of selecting a red card?",
        answer: "1/2 ",
        options: [
          "1/2",
          "2/6",
          "3/8",
          "2/3"
        ]
      },
      {
        id: 7,
        question: "  What is the probability of paper losing to scissors?",
        answer: "1/3",
        options: [
          "1/8",
          "1/3",
          "1/5",
          "1/2"
        ]
      },
      {
        id: 8,
        question: "  There are red, yellow and green lollipops in a bag. What is the probability of selecting a blue one?",
        answer: "0/3",
        options: [
          "1/3",
          "5/7",
          "0/3",
          "2/5"
        ]
      },
      {
        id: 9,
        question: "  If you rolled a 6-sided dice, what is the probability of rolling a 3?",
        answer: "1/6",
        options: [
          "3/7",
          "2/5",
          "1/8",
          "1/6"
        ]
      },
      {
        id: 10,
        question: "What is the probability of rock beating paper?",
        answer: "0/3",
        options: [
          "3/7",
          "1/2",
          "0/3",
          "1/8"
        ]
      },
    ];
    
    let question_count = 0;
    let points = 0;
    
    window.onload = function() {
      show(question_count);
    
    };
    
    function next() {
    
       
      // if the question is last then redirect to final page
      if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "end.html";
      }
      console.log(question_count);
    
      let user_answer = document.querySelector("li.option.active").innerHTML;
      // check if the answer is right or wrong
      if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
      }
      console.log(points);
    
      question_count++;
      show(question_count);
    }
    
    function show(count) {
      let question = document.getElementById("questions");
      let [first, second, third, fourth] = questions[count].options;
    
      question.innerHTML = `
      <h2>Q${count + 1}. ${questions[count].question}</h2>
       <ul class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>
    </ul> 
      `;
      toggleActive();
    }
    
    function toggleActive() {
      let option = document.querySelectorAll("li.option");
      for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
          for (let i = 0; i < option.length; i++) {
            if (option[i].classList.contains("active")) {
              option[i].classList.remove("active");
            }
          }
          option[i].classList.add("active");
        };
      }
    }
    