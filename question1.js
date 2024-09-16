const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    let count = 0;
    
    for (const name of myArray) {
      if (count >= counter) break;
      console.log(`${greetText}${name}`);
      count++;
    }
  };
   greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  