//Use Destructuring Assignment to Assign Variables from Nested Objects
document.write("Use Destructuring Assignment to Assign Variables from Nested Objects <br/>");


const ANCESTRY_FILE = [{
        name: "Carolus Haverbeke", //name: "Carolus Haverbeke",


        ancestors: [{
            name: "Maria van Brussel1", //name: "Maria van Brussel",

            ancestors: [{
                name: "Gustavus Adamus1" //name: "Gustavus Adamus"
            }]
        }]
    },
    {
        name: "Emma de Milliano", //name: "Emma de Milliano",

        ancestors: [{
                name: "Petrus de Milliano", //name: "Petrus de Milliano",

                ancestors: [{
                    name: "Pieter de Decker" //name: "Pieter de Decker"
                }]
            },
            {
                name: "Maria van Brussel2", //name: "Maria van Brussel",

                ancestors: [{
                    name: "Gustavus Adamus2" //name: "Gustavus Adamus"
                }]
            }
        ]
    },
    {
        name: "Father Adam", //name: "Father Adam",

        ancestors: [{
            name: "Gustavus Adamus3" //name: "Gustavus Adamus"
        }]
    }
];


function getAncestors(person, callback) {
    "use strict";
    let ancestors = [];
    const {
        ancestors: [{
            ancestors: [{
                name
            }]
        }]
    } = person;
    ancestors.push(name);
    callback(ancestors);
}
getAncestors(ANCESTRY_FILE[0], (ancestors) => {
    document.write(ancestors + '<br/>');
});
getAncestors(ANCESTRY_FILE[1], (ancestors) => {
    document.write(ancestors + '<br/>');
});