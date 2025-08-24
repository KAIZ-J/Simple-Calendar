 const displayYear = document.getElementById("display-year")
    const todaysDateBtn  = document.getElementById("todays-date")
      const cy = document.getElementById("current-year")
      const cmn = document.getElementById("current-month-number")
     const container= document.getElementById("container")
      document.addEventListener("DOMContentLoaded", containerAdd);
      const months = [
  { name: "January", daysNumber: 31},
  { name: "February", daysNumber: 28},
  { name: "March", daysNumber: 31},
  { name: "April", daysNumber: 30},
  { name: "May", daysNumber: 31},
  { name: "June", daysNumber: 30},
  { name: "July", daysNumber: 31},
  { name: "August", daysNumber: 31},
  { name: "September", daysNumber: 30},
  { name: "October", daysNumber: 31},
  { name: "November", daysNumber: 30},
  { name: "December", daysNumber: 31}
];
 let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 function repeater(times,daynumber){
  let str = "";
  for(let i=times;i>0;i--){
  str+=`<span class="leftover-days">${daynumber-i}</span>`
  }
  return str;
 }
 function nextRepeater(toBeSubtracted){
  let str = "";
  let num = 42 - toBeSubtracted;
  for(let i=1;i<num;i++){
  str+=`<span class="leftover-days">${i}</span>`
  }
  return str;
 }
 function getPreviousDayNumber(index){
  if(index>0){
    index -=1;
    return months[index].daysNumber
  }
  else{
    return months[11].daysNumber
  }
 }
    function nextDay(str){
    let index  = dayNames.indexOf(str);
    if(index<6){
      return dayNames[index+1]
    }
    else {
      return dayNames[0]
    }
    }
    function lastDay(gap,dayNumber){
      let subtracted = dayNumber-29+gap;
      if(subtracted>6){
        return dayNames[subtracted-7] ;
      }
      else {
        return dayNames[subtracted] ;
      }
     
    }
     let startingDay = "Wed";
       function days(daysNumber,month,year,previousDayNumber) {
         const today = new Date();
         const date = today.getDate();
         const day =  dayNames[today.getDay()-1];
         let num = dayNames.indexOf(startingDay);
         startingDay=nextDay(lastDay(num,daysNumber)) 
        let toBeAppended = repeater(num,previousDayNumber);
        let str = "";
        for (let i = 1; i < daysNumber+1; i++) {
          if(i===1){
            str+=toBeAppended;
          }
          str+=`<span class="months-number" id="${month}-${year}-${i}">${i}</span>`;
        }
        str+=nextRepeater(daysNumber+num)
        return str;
   
      }
    function containerAdd(){
       const today = new Date();
         const date = today.getDate();
         const month = months[today.getMonth()].name;
         const currentYear = today.getFullYear()
         for(let j=0;j<11;j++){
          let theYear = 2020+j;
          if(2020+j===2020 || 2020+j===2024 || 2020+j===2028){
            months[1].daysNumber=29;
          }
          else{
             months[1].daysNumber=28;
          }
 for(let i=0;i<12;i++){
  container.innerHTML+=`
  <div id="${months[i].name}-${2020+j}" class="month">
        <div class="days">
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
      <div class="dates">${days(months[i].daysNumber,months[i].name,theYear,getPreviousDayNumber(i))}</div>
      </div>
  `
 }
         }
;
  const observer = new IntersectionObserver((entries)=>{ 
   entries.forEach((entry)=>{
    let num = entry.target.id.split('-')[0]
    let numother = entry.target.id.split('-')[1]
   if(entry.isIntersecting){
   cmn.textContent=num;
   cy.textContent=`${numother}/`;
   if(entry.target.id===`${month}-${currentYear}`){
  todaysDateBtn.style.opacity="0";
  todaysDateBtn.style.transform="translateY(-50%)";
  
   }
   else{
    todaysDateBtn.style.opacity="1";
    todaysDateBtn.style.transform="translateY(0%)";
   }
    }
  })
  },{})
 const cards = document.querySelectorAll('.month');
  cards.forEach(el => observer.observe(el));
   document.getElementById(`${month}-${currentYear}-${date}`).classList.add("active");
   document.getElementById(`${month}-${currentYear}`).scrollIntoView({behavior:"instant"})
    }
     const today = new Date();
         const date = today.getDate();
         document.getElementById("todays-date").textContent=date
         const month = months[today.getMonth()].name
           const currentYear = today.getFullYear()
    function goScroll(){
       document.getElementById(`${month}-${currentYear}`).scrollIntoView({behavior:"smooth"})
    }
      function displayTheYear(elem){
          todaysDateBtn.style.opacity="0";
  todaysDateBtn.style.transform="translateY(-50%)";
        displayYear.innerHTML=""
        elem.parentElement.style.display="none"
        container.style.display="none"
         displayYear.style.display="grid"
        for(let i=0;i<12;i++){
          displayYear.innerHTML+=`
            <span id="display-${months[i].name}-${elem.textContent.slice(0,4)}" onclick="goToMonth(this)">${months[i].name}</span>
          `
        }
       
      }
      function goToMonth(elem){
         container.style.display="flex"
          displayYear.style.display="none";
          document.querySelector("h1").style.display="block";
          document.getElementById(`${elem.id.slice(8)}`).scrollIntoView({behavior:"smooth"})
      }