let name = `salman`;
let age = 20;
let password = `1234`;

// if else example
if (name === `salman`) {
  console.log(`welcome ${name}`);
} else {
  console.log(`you are not welcome here ${name}`);
}

// nested if else example
if (name === `salman`) {
  if (age > 18) {
    console.log(`welcome ${name}`);
  } else {
    console.log(`you are not welcome here ${name}`);
  }
}


// if else with multuiple logical gates, AND OR
if (name === `salman` && age > 18) {
  console.log(`welcome ${name}`);
} else {
  console.log(`you are not welcome here ${name}`);
}