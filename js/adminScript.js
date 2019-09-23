const inputName = document.getElementById('addName');
const inputSpecialist = document.getElementById('addSpecialist');

function loadJson() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        console.log(data);
        arraySort(data["clients"]);
        localStorage.setItem('clientData', JSON.stringify(data));
      }
    }
  };
  httpRequest.open('GET', './json/InitialData.json');
  httpRequest.send();
//   localStorage.setItem('clientData', JSON.stringify({
//     "specialists": [{
//         "name": "Rowan Mcdougall"
//       },
//       {
//         "name": "Jayce Haines"
//       },
//       {
//         "name": "Vikram Hall"
//       }
//     ],
//     "clients": [{
//         "name": "Eloise Wilcox",
//         "number": 1,
//         "state": true,
//         "specialist": "Rowan Mcdougall"
//       },
//       {
//         "name": "Sian Barber",
//         "number": 2,
//         "state": true,
//         "specialist": "Rowan Mcdougall"
//       },
//       {
//         "name": "Siraj Ashley",
//         "number": 1,
//         "state": true,
//         "specialist": "Jayce Haines"
//       },
//       {
//         "name": "Tania Keeling",
//         "number": 3,
//         "state": true,
//         "specialist": "Rowan Mcdougall"
//       },
//       {
//         "name": "Tayyib Charles",
//         "number": 2,
//         "state": true,
//         "specialist": "Jayce Haines"
//       },
//       {
//         "name": "Kavan Bostock",
//         "number": 5,
//         "state": true,
//         "specialist": "Vikram Hall"
//       },
//       {
//         "name": "Karson Hurley",
//         "number": 4,
//         "state": true,
//         "specialist": "Jayce Haines"
//       },
//       {
//         "name": "Ameen Medrano",
//         "number": 2,
//         "state": true,
//         "specialist": "Vikram Hall"
//       },
//       {
//         "name": "Hawa Larson",
//         "number": 6,
//         "state": true,
//         "specialist": "Vikram Hall"
//       }
//     ]
//   }
// ));
}

function addForm() {
  const parsed = JSON.parse(localStorage.getItem('clientData')) ? JSON.parse(localStorage.getItem('clientData')) : false;
  if (parsed === false) {
    const itemsArray = {
      "specialists": [{
        "name": inputSpecialist.value
      }],
      "clients": [{
        "name": inputName.value,
        "number": 10,
        "state": true,
        "specialist": inputSpecialist.value
      }]};
      localStorage.setItem('clientData', JSON.stringify(itemsArray));

    }
    else {
      const itemsArray = {
        "name": inputName.value,
        "number": 10,
        "state": true,
        "specialist": inputSpecialist.value
      };
      let clientLength = parsed["clients"].length;
      console.log(clientLength);
      parsed["clients"][clientLength] = itemsArray;
      arraySort(parsed["clients"]);
      localStorage.setItem('clientData', JSON.stringify(parsed));
    }
  }

  const arraySort = (data) => {
    data.sort((a, b) => (a.specialist > b.specialist) ? 1 : (a.specialist === b.specialist) ? ((a.number > b.number) ? 1 : -1) : -1);
  }
