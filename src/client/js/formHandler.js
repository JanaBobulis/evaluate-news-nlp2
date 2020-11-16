//import fetch from "node-fetch"
//import { resolve } from "dns";

const { urlChecker } = require("./urlChecker");
//import { urlChecker } = from './urlChecker.js';

function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if (urlChecker(formText)) {

    postData(formText)
    .then(function(res) {
        console.log('client side response', res);
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('polarity').innerHTML = `Polarity: ${res.score_tag}`;
    })
}
}

const postData = async(url ='') => {
    const response = await fetch('http://localhost:8083/test', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            //cache: "no-cache",
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
            },
            body: JSON.stringify( {"url": url }),
        });

        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch (error) {
            console.log("error", error);
        }
}

export { handleSubmit }


