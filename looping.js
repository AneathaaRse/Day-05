var data = {
    "name": "Aneathaa RSe",
    "age": 27,
    "contact": {
      "email": "anethaarse97@gmail.com",
      "phone": "+1234567890",
      "location":"Madurai"
    },
    
 
        
    "education": [ 
      {
        "school": "Sree Sowdambika Convent matric.higher.sec.school",
        "degree": "BACHELOR of ENGINEERING",
        "university": "Anna university",
        "location": "chennai",
        "dates": "2014 - 2018",
        

      }
     
    ],"skills":["Javascript","Python","Html"]};


    // for loop 

    for (var key in data) {
        if (Array.isArray(data[key])) {
          console.log(`${key}:`);
          data[key].forEach(item => console.log(`- ${item}`));
        } else if (typeof data[key] === 'object') {
          console.log(`${key}:`);
          for (var innerKey in data[key]) {
            console.log(`- ${innerKey}: ${data[key][innerKey]}`);
          }
        } else {
          console.log(`${key}: ${data[key]}`);
        }
      }


      //forin loop


      for (var key in data) {
        if (Array.isArray(data[key])) {
          console.log(`${key}:`);
          data[key].forEach(item => console.log(`- ${item}`));
        } else if (typeof data[key] === 'object') {
          console.log(`${key}:`);
          for (let innerKey in data[key]) {
            console.log(`- ${innerKey}: ${data[key][innerKey]}`);
          }
        } else {
          console.log(`${key}: ${data[key]}`);
        }
      }


    
   