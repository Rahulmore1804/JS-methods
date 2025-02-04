const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  // This will return "John Doe":
  let a  = person.fullName.call(person1);
  console.log('a', a) //John Doe

  const person11 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person111 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person11.fullName.apply(person111, ["Oslo", "Norway"])) //John Doe ,Oslo ,Norway