const jsonData = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
  const days = document.querySelectorAll(".days");
  const valueBox = document.querySelectorAll(".toggle-box");
  const date = new Date().toString();
  const today = date.substring(0,3).toLowerCase();
  

  for(let i = 0; i < jsonData.length; i++) {
    if (days[i].classList.contains(jsonData[i]["day"])) {}
   days[i].previousElementSibling.innerText = `$${jsonData[i]["amount"]}`,
   days[i].style.height = `${jsonData[i]["amount"]*3}px`;
   if (days[i].classList.contains(today)) {
    days[i].style.background = "hsl(186, 34%, 60%)",
    days[i].previousElementSibling.classList.add("display");
   } else {
    days[i].previousElementSibling.classList.remove("display");
   }

   }
  
  days.forEach(function(dayOfWeek){
    dayOfWeek.addEventListener("mouseenter", function() {
        dayOfWeek.previousElementSibling.classList.add("display")
    })
  })
  

  days.forEach(function(dayOfWeek){
    dayOfWeek.addEventListener("mouseleave", function() {
      if (!dayOfWeek.classList.contains(today))
        dayOfWeek.previousElementSibling.classList.remove("display")
        
    })
  })
  


