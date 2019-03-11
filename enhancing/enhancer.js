module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  console.log("YOYOYOYIPPIYOYIPPYYAYWHERE MY STARS AT ********************************************")
  console.log(item.enhancement)
  newItem = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement += 1 
  }
  if (newItem.enhancement > 20) {
    return item
  } 
  return  newItem ;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  }
  return newItem;
}

function get(item) {
  return { ...item };
}

const item = {
  name :"Lambda Shield",
  durability : 87,
  enhancement : 2
}

succeed(item);