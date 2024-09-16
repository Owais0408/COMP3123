const capitalize = (str) => {
    const [firstChar, ...rest] = str;
     return `${firstChar.toUpperCase()}${rest.join('')}`;
  };
  console.log(capitalize('fooBar*')); 
  console.log(capitalize('nodeJs'));  
  