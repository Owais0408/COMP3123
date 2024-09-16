const capitalize = (str) => {
    const [firstChar, ...rest] = str;
    return `${firstChar.toUpperCase()}${rest.join('')}`;
  };
  const colors = ['red', 'green', 'blue'];
  const capitalizedColors = colors.map(capitalize);
  console.log(capitalizedColors); // Output: ['Red', 'Green', 'Blue']
  