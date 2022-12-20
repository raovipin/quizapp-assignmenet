
  let questions = [
    {
      id: 1,
      question: "The average age of 80 girls was 20 years, the average age of 20 of them was 22 years and that of another 20 was 24 years. Find the average age of the remaining girls.",
      answer: "17 years",
      options: [
        "17 years",
        "19 years",
        "20 years",
        "21 years"
      ]
    },
    {
      id: 2,
      question: "The ratio of the present ages of Sunita and Vinita is 4:5. Six years hence the ratio of their ages will be 14:17. What will be the ratio of their ages 12 years hence?",
      answer: "16:19",
      options: [
          "16:19",
          "12:20",
          "22:50",
          "1:2"
          
      ]
    },
    {
      id: 3,
      question: "The ratio of the present ages of a son and his father is 1:5 and that of his mother and father is 4: 5. After 2 years the ratio of the ages of the son to that of his mother becomes 3 : 10. What is the present age of the father?",
      answer: "35 years",
      options: [
        "22 years",
        "32 years",
        "37 years",
        "35 years"
      ]
    },
    {
      id: 4,
      question: "If 8 :15 is the ratio of sunil and tarun ages than the ratio and tarun change after the period of 9 year and become 11:18 . Find out the age difference between sunil and tarun ? ",
      answer: "35 years",
      options: [
        "22 years",
        "32 years",
        "21 years",
        "35 years"
      ]
    },
    {
      id: 5,
      question: " What should be the present age of a man if the given condition is such as 15 year hence , a men will be 4 times as old as he was before the period of 15 year?",
      answer: "45 years",
      options: [
        "22 years",
        "45 years",
        "21 years",
        "35 years"
      ]
    },
    {
      id: 6,
      question: " If the age of a mother is 3 times in the comparison of her daughter before the period of 10 year . 10 year later from the present date , the mother age would be 2 times of her daughter. In that situation what should be the age ratio of them at the present time?",
      answer: "7:3 ",
      options: [
        "16:19",
          "12:20",
          "7:3",
          "1:2"
      ]
    },
    {
      id: 7,
      question: "  At the present time a man age is 3 times in the comparison of his son . the man would be double than his son after 15 year . In that case what should be the age of his son at the present time?",
      answer: "15 years",
      options: [
        "22 years",
        "45 years",
        "15 years",
        "35 years"
      ]
    },
    {
      id: 8,
      question: "  Yusuf is as much younger to ajay as he is older to pawan , if 48 year is the sum of ajay and pawan then what should be the present age of yusuf?",
      answer: "24 years",
      options: [
        "22 years",
        "24 years",
        "15 years",
        "35 years"
      ]
    },
    {
      id: 9,
      question: "  Before the period of 16 year, my grandfather was 8 times older in the comparison of me. He would be 3 times of my age 8 years now. Find out the ratio of my grandfather and my age before the period of 8 year.",
      answer: "None of these",
      options: [
        "3/7",
        "2/5",
        "None of these",
        "1/6"
      ]
    },
    {
      id: 10,
      question: "The age of the father was 38 years when he was born at that time the age of the mother was 36 years old while his brother was 4 year younger to his was born. What should be the difference between the age of father and mother?",
      answer: "6 years",
      options: [
        "22 years",
        "24 years",
        "6 years",
        "35 years"
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
  