document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("bookingFormContainer").style.display = "block";
  });
  
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Retrieve form values
    var customerName = document.getElementById("customerName").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var totalDays = parseInt(document.getElementById("totalDays").value);
    var totalPersons = parseInt(document.getElementById("totalPersons").value);
    var roomType = document.getElementById("roomType").value;
    var amenities = document.getElementById("amenities").value;
    var advanceAmount = parseInt(document.getElementById("advanceAmount").value);
    var extraPersons = parseInt(document.getElementById("extraPersons").value);
  
    // Perform calculations
    var roomRate = (roomType === "Delux") ? 2500 : 4000;
    var amenitiesCost = (amenities === "AC") ? 1000 : 300;
    var totalRoomCost = roomRate * totalDays;
    var totalAmenitiesCost = amenitiesCost * totalDays;
    var totalCost = totalRoomCost + totalAmenitiesCost;
    var balance = totalCost - advanceAmount;
  
    // Display results
    alert("Customer Name: " + customerName +
      "\nCheck-in Date: " + checkInDate +
      "\nTotal No of Days: " + totalDays +
      "\nTotal No of Persons: " + totalPersons +
      "\nRoom Type: " + roomType +
      "\nAmenities: " + amenities +
      "\nAdvance Amount: " + advanceAmount +
      "\nTotal Room Cost: " + totalRoomCost +
      "\nTotal Amenities Cost: " + totalAmenitiesCost +
      "\nTotal Cost: " + totalCost +
      "\nBalance: " + balance);
  
    // Reset form values
    document.getElementById("bookingForm").reset();
    document.getElementById("bookingFormContainer").style.display = "none";
  });
  