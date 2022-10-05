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
     // creating a div for holding question and answer and adding a class faq

     const div = document.createElement("div");
     div.classList.add("faq" );
    // creating faq head div
    

     // creating an h3
     const h3 = document.createElement("h3");
     h3.classList.add("faq_header");
     //creating element button
     const btn = document.createElement("buttton");
     btn.classList.add("show_btn");
     const plus = document.createTextNode("+");
       btn.appendChild(plus);
     

     
     // creating a  p tag
     const p = document.createElement("p");

     // creating a text node for h3
     const name = document.createTextNode(data.question);
     // creating a text node for p tag
     const para = document.createTextNode(data.answer);



     
     // ading text in h3
     h3.appendChild(name);
     // ading para to  p tag
     p.appendChild(para);
     // ading h3 to div
     div.appendChild(h3);
     // appending btn to div
     div.appendChild(btn);
     
     //adding p tag in div
     div.appendChild(p);
     // adding div to container
     container.appendChild(div);
     // ading a class faq to div
     div.setAttribute("class", "faq");
   });

 
  
}


showFaq ();

function createFaq() {
  
}

function btnStatusUpdate() {
  
}


