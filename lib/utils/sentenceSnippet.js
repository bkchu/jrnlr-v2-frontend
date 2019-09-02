export const snippet = str => {
  const splitString = str.substr(0, 150).split(' '); // hello there bro, How are yo
  splitString.pop(); // hello there bro, How are
  return `${splitString.join(' ')}...` // hello there bro, How are...
}