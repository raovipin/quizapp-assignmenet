
let questions = [
    {
      id: 1,
      question: "A tank is normally filled in 6 hours but it takes 4 hours longer to fill because of a leak in its bottom. If the tank is full, the leak will empty in?",
      answer: "15 hours",
      options: [
        "24 hours",
        "15 hours",
        "12 hours",
        "10 hours"
      ]
    },
    {
      id: 2,
      question: "A tank can be filled by two taps A and B in 5 hours and 15 hours respectively.Tap C can empty the tank in 5 hours.If all the three taps are opened simultaneously, approximately how long will it take to fill the tank completely?",
      answer: "15 hours",
      options: [
        "24 hours",
        "15 hours",
        "12 hours",
        "10 hours"
      ]
    },
    {
      id: 3,
      question: "Three pipes A,B and C can fill a cistern in 204 hours.After working together for 68 hours,C is closed and A and B filled the remaining part in 204 hours.Find the number of hours taken by C alone to fill the cistern?",
      answer: "612",
      options: [
        "608",
        "612",
        "634",
        "622"
      ]
    },
    {
      id: 4,
      question: " Three pipes A,B and C can fill a cistern in 270  hours.After working together for 90 hours,C is closed,then A and B filled the remaining part in 270 hours.Find the number of hours taken by C required to fill the empty cistern?",
      answer: "810",
      options: [
        "820",
        "810",
        "800",
        "790"
      ]
    },
    {
      id: 5,
      question: " Three pipes A,B and C can fill a cistern in 72 hours. After working at it together for 24 hours,C is closed and A and B filled the remaining part in 72 hours.Find the number of hours required by C alone to fill the cistern?",
      answer: "216",
      options: [
        "210",
        "201",
        "220",
        "216"
      ]
    },
    {
      id: 6,
      question: " Two inlet pipes A and B together can fill a tank in 24 min, and it takes 6 min more when one leak is developed in the tank.Find the time taken by leak alone to empty the tank?",
      answer: "2 hours",
      options: [
        "1.5 hours",
        "2.5 hours",
        "3.5 hours",
        "2 hours"
      ]
    },
    {
      id: 7,
      question: "  Three floop gates A,B and C can fill a rservoir in 6 hours.After working at it together for 2 hours,flood gate C is closed.Flood gates A and B can fill the remaining part in 7 hours.The number of hours taken by flood gate C alone to fill the reservoir is?",
      answer: "14",
      options: [
        "16",
        "12",
        "14",
        "18"
      ]
    },
    {
      id: 8,
      question: "  Pipes A and B can fill a tank with water in 30 minutes and 40 minutes, respectively,while pope C can drain off 51 liters of water per minute.If all the three pipes are opened together, the tank is filled in 90 minutes.What is the capacity(in litres) of the tank?",
      answer: "1080",
      options: [
        "1000",
        "1020",
        "980",
        "1080"
      ]
    },
    {
      id: 9,
      question: "  Two pipes A and B together can fill a tank in 6 hours. If pipe A can fill 5 hours faster than pipe B,in how many hours pipe B alone can fill the tank?",
      answer: "15",
      options: [
        "10",
        "16",
        "12",
        "15"
      ]
    },
    {
      id: 10,
      question: "Pipe A can fill a thank in 6 hours.Pipe B can fill the same tank in 8 hours.Pipe A,B and C together can fill the same tank in 12 hours.Then which of the following statements is true for pipe C?",
      answer: "It can fill the tank in 4 hours 48 minutes",
      options: [
        "It can fill the tank in 4 hours 40 minutes",
        "It can fill the tank in 4 hours 48 minutes",
        "It can empty the tank in 4 hours 48 minutes",
        "It can empty the tank in 4 hours 40 minutes"
      ]
    },
  ];
  
  let question_count = 0;
  let points = 0;
  let score =0;
  
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
 

