const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];



const faqs = [];

   

function showFaq() {


   const container  = document.querySelector(".accordian_body");
 

   faqData.forEach((data) => {


  let faq = document.createElement("div");
  faq.classList.add("faq" );


  let faqHeader = document.createElement("div");
  faqHeader.classList.add("faq_header");


   const h3 = document.createElement("h3"); 
    const question = document.createTextNode(data.question);

     const showBtn = document.createElement("button"); 
     showBtn.classList.add("show_btn");
     const plus = document.createTextNode("+");
    
    h3.appendChild(question);
    showBtn.appendChild(plus);
    faqHeader.appendChild(h3);
    faqHeader.appendChild(showBtn);
    faq.appendChild(faqHeader);
    container.appendChild(faq);


    // hiden content

     let hidden = document.createElement("div");
     hidden.classList.add("hidden");

   const p = document.createElement("p"); 
    const answer = document.createTextNode(data.answer);

    p.appendChild(answer);
    hidden.appendChild(p);
    faq.appendChild(hidden);

  let clicked = true;
   showBtn.addEventListener("click", () => {
   if (clicked ) {
     hidden.style.display = "inline";
     clicked = false;
   } else {
     hidden.style.display = "none";
     clicked = true;
   }

   })
    


   });

 
  
}


showFaq ();


