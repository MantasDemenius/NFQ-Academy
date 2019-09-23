const inputName = document.getElementById('addName');
const inputSpecialist = document.getElementById('optionSpecialist');

function loadJson() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        // console.log(data);
        arraySort(data["clients"]);
        localStorage.setItem('clientData', JSON.stringify(data));
      }
    }
  };
  httpRequest.open('GET', './json/InitialData.json');
  httpRequest.send();
}

function addForm() {
  const parsed = JSON.parse(localStorage.getItem('clientData')) ? JSON.parse(localStorage.getItem('clientData')) : false;
  let optionSpecialistText = inputSpecialist.options[inputSpecialist.selectedIndex].text;
  let newNumber = getNumber(optionSpecialistText, parsed["clients"]);
  if (parsed === false) {
    console.log('Neuzkrauti dumoenys');

    }
    else {
      const itemsArray = {
        "name": inputName.value,
        "number": newNumber,
        "state": 'Neaptarnautas',
        "specialist": optionSpecialistText
      };
      let clientLength = parsed["clients"].length;
      parsed["clients"][clientLength] = itemsArray;
      arraySort(parsed["clients"]);
      localStorage.setItem('clientData', JSON.stringify(parsed));
    }
  }

  const arraySort = (data) => {
    data.sort((a, b) => (a.specialist > b.specialist) ? 1 : (a.specialist === b.specialist) ? ((a.number > b.number) ? 1 : -1) : -1);
  }

  function getNumber(specialist, items) {
  let number = 0;
  items.map(person => {
    if(person.specialist === specialist && number <= person.number){
       number = person.number +1;
    }
  })

  return number;
}
