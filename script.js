 const displayYear = document.getElementById("display-year")
    const todaysDateBtn  = document.getElementById("todays-date")
      const cy = document.getElementById("current-year")
      const cmn = document.getElementById("current-month-number")
     const container= document.getElementById("container")
     const holidayContainer = document.getElementById("holiday-container")
      document.addEventListener("DOMContentLoaded", containerAdd);
      const jumpToDateDialog = document.getElementById("jump-to-date")
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
const holidays = [
  // January
  { day: "January-1", holidayName: "New Year's Day" },
  { day: "January-15", holidayName: "World Religion Day" },
  { day: "January-27", holidayName: "Lailat al Miraj" },

  // February
  { day: "February-4", holidayName: "World Cancer Day" },
  { day: "February-14", holidayName: "Mid-Sha‘ban" },
  { day: "February-20", holidayName: "World Day of Social Justice" },

  // March
  { day: "March-1", holidayName: "Ramadan Begins" },
  { day: "March-8", holidayName: "International Women's Day" },
  { day: "March-20", holidayName: "International Day of Happiness" },
  { day: "March-22", holidayName: "World Water Day" },
  { day: "March-27", holidayName: "Laylat al-Qadr" },
  { day: "March-31", holidayName: "Eid al-Fitr" },

  // April
  { day: "April-7", holidayName: "World Health Day" },
  { day: "April-22", holidayName: "Earth Day" },

  // May
  { day: "May-1", holidayName: "International Labour Day" },
  { day: "May-15", holidayName: "International Day of Families" },
  { day: "May-21", holidayName: "World Day for Cultural Diversity" },
  { day: "May-31", holidayName: "World No-Tobacco Day" },

  // June
  { day: "June-5", holidayName: "World Environment Day" },
  { day: "June-5", holidayName: "Day of Arafat" },
  { day: "June-6", holidayName: "Eid al-Adha" },
  { day: "June-8", holidayName: "World Oceans Day" },
  { day: "June-20", holidayName: "World Refugee Day" },
  { day: "June-26", holidayName: "Hijri New Year" },

  // July
  { day: "July-11", holidayName: "World Population Day" },
  { day: "July-18", holidayName: "Nelson Mandela International Day" },

  // August
  { day: "August-12", holidayName: "International Youth Day" },
  { day: "August-19", holidayName: "World Humanitarian Day" },

  // September
  { day: "September-4", holidayName: "Mawlid an-Nabi" },
  { day: "September-8", holidayName: "International Literacy Day" },
  { day: "September-15", holidayName: "International Day of Democracy" },
  { day: "September-21", holidayName: "International Day of Peace" },
  { day: "September-27", holidayName: "World Tourism Day" },

  // October
  { day: "October-1", holidayName: "International Day of Older Persons" },
  { day: "October-2", holidayName: "International Day of Non-Violence" },
  { day: "October-5", holidayName: "World Teachers' Day" },
  { day: "October-16", holidayName: "World Food Day" },
  { day: "October-24", holidayName: "United Nations Day" },

  // November
  { day: "November-14", holidayName: "World Diabetes Day" },
  { day: "November-16", holidayName: "International Day for Tolerance" },
  { day: "November-20", holidayName: "Universal Children’s Day" },

  // December
  { day: "December-1", holidayName: "World AIDS Day" },
  { day: "December-10", holidayName: "Human Rights Day" },
  { day: "December-25", holidayName: "Christmas" },
  { day: "December-31", holidayName: "New Year's Eve" }
];

 let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 function repeater(times,daynumber){
  let str = "";
  for(let i=times-1;i>=0;i--){
  str+=`<span class="leftover-days">${daynumber-i}</span>`
  }
  return str;
 }
 function sliceMiddle(str){
    let array = [];
    array.push(str.split("-")[0])
    array.push(str.split("-")[2])
    return array.join("-")
 }
 function nextRepeater(toBeSubtracted){
  let str = "";
  let num = 42 - toBeSubtracted;
  for(let i=1;i<=num;i++){
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
      function addToHolidays(array){
        holidayContainer.innerHTML="";
        array.forEach(({day,holidayName})=>{
            holidayContainer.innerHTML+=` <div>
          <p>${holidayName}</p>
          <span>${day.split("-")[1]}</span>
        </div>
            `
        })
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
   addToHolidays(holidays.filter(el=>el.day.split('-')[0]===entry.target.id.split('-')[0]))
   cy.textContent=`${numother}/`;
   if(entry.target.id===`${month}-${currentYear}`){
  todaysDateBtn.style.opacity="0";
  todaysDateBtn.style.scale="0";
  
   }
   else{
    todaysDateBtn.style.opacity="1";
    todaysDateBtn.style.scale="1";
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
        displayYear.innerHTML="";
         displayYear.style.display="grid";
         jumpToDateDialog.showModal();
        for(let i=0;i<12;i++){
          displayYear.innerHTML+=`
            <span id="display-${months[i].name}-${elem.textContent.slice(0,4)}" onclick="goToMonth(this)">${months[i].name.slice(0,3)}</span>
          `
        }
       
      }
      function goToMonth(elem){
         container.style.display="flex";
         jumpToDateDialog.close();
          document.querySelector("h1").style.display="block";
          document.getElementById(`${elem.id.slice(8)}`).scrollIntoView({behavior:"smooth"})
      }