// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

// console.log(course.tags);

let castle = {
  title: "Live like a King in my Castle",
  location: "Galway",
  price: 190,
  amenities: ["4 guests", "1 bedroom", "2 beds", "private half-bath"],
  isSuperHost: true,
};

console.log(castle.title + " - " + castle.location);
console.log(castle.price);
