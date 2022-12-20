
  let questions = [
    {
      id: 1,
      question: "Amit sold an umbrella for Rs. 680, losing 15%. The expense cost of the umbrella is:",
      answer: "Rs. 800",
      options: [
        "Rs. 782",
        "Rs. 600",
        "Rs. 400",
        "Rs. 800"
      ]
    },
    {
      id: 2,
      question: " The offering cost of an article 4/3 times its expense cost. The addition percent is:",
      answer: "100/3%",
      options: [
          " 61/3%",
          "105/3%",
          "100/3%",
          "101/3%"
          
      ]
    },
    {
      id: 3,
      question: "The expense cost of two dozen bananas is Rs. 32. In the wake of offering 18 Bananas at Rs. 12 for every dozen, the businessperson lessened the rate as Rs. 4 for every dozen. The misfortune percent is:",
      answer: "37.5%",
      options: [
        "22%",
        "32%",
        "37.5%",
        "35%"
      ]
    },
    {
      id: 4,
      question: " If the maker additions 10%, the wholesale merchant 15% and the retailer 25%, then the expense of the generation of an article whose retail cost is rs. 1265, is:",
      answer: " 800 Rs.",
      options: [
        " 900 Rs.",
        " 800 Rs.",
        " 840 Rs.",
        " 805 Rs."
      ]
    },
    {
      id: 5,
      question: " A person incurs 10% loss by selling a refrigerator for Rs 5400. At what price should the refrigerator be sold to earn 10% profit?",
      answer: "6600",
      options: [
        "6680",
        "6600",
        "6650",
        "6640"
      ]
    },
    {
      id: 6,
      question: " When a plot is sold for Rs. 33,300, the owner loses 10%. At what price must that plot be sold in order to gain 10%?",
      answer: " 40700 ",
      options: [
        " 40785",
          " 407700",
          " 407050",
          " 40700"
      ]
    },
    {
      id: 7,
      question: " Toffees are bought at the rate of 5 for a rupee. To gain 25% they must be sold at?",
      answer: "4 Toffees for Re. 1",
      options: [
        "7 Toffees for Re. 1",
        "8 Toffees for Re. 1",
        "4 Toffees for Re. 1",
        "5 Toffees for Re. 1"
      ]
    },
    {
      id: 8,
      question: " When 1 is added to each of the given two numbers, their proportion gets to be 3:4 and when 5 is subtracted from each , the proportion gets to be 7:10. The numbers are:",
      answer: "26, 35",
      options: [
        "26, 35",
        " 27, 36",
        "11, 15",
        "8, 11"
      ]
    },
    {
      id: 9,
      question: "  A merchant purchases an article stamped at Rs 25000 with 20% and 5% off. He spends Rs 1000 on its repairs and offers it for Rs 25000. What is his addition or misfortune percent?",
      answer: "Gain of 25%",
      options: [
        "Gain of 28%",
        "Gain of 25%",
        "Gain of 35%",
        "Gain of 26%"
      ]
    },
    {
      id: 10,
      question: "On a Rs. 10000 installment arrange a man has decision between three progressive rebates of 10%, 10% and 30% and three progressive rebates of 40%, 5% and 5%. By picking the better one, he can spare:",
      answer: " Rs. 255",
      options: [
        " Rs. 258",
        " Rs. 286",
        " Rs. 255",
        " Rs. 296"
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
  