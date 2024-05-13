
function calculateAge() {
    // ##### get input value from user ############ \\
  
    var inputDate = document.getElementById("date").value;
  
    // ######## putting input value in birthday variable ############### \\
  
    var birthDate = new Date(inputDate);
  
    //  ############ function for update age ################# \\
  
    function updateAge() {
      // ############ current Date variable ############# \\
  
      var currentDate = new Date();
  
      // ############ diffrence between birthdate and currentdate ########### \\
  
      let difference = currentDate - birthDate;
  
      // ############## check year month day hour minutes seconds ############# \\
  
      let years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
      let months = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24 * 30.44)
      );
      let days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      // ################## using html element for display age ################ \\\
  
      document.getElementById("year").innerHTML = years;
      document.getElementById("month").innerHTML = months;
      document.getElementById("day").innerHTML = days;
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;
    }
  
    updateAge();
  
    setInterval(updateAge, 1000);
  }
  
  document.getElementById("generateBtn").addEventListener("click", calculateAge);
  