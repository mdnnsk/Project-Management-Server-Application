var randomCompanyName = function (){
  var companyName = [ "Goofy Inc.", "Lama Lama", "Pizza Plaza", "Henry's Hardware Store", "Adam's Atom Bombs", "Nick's Karate Class", "Water Digital", "Planet Gummy Bears", "Sally's Sweets", "Ninja Stars Inc.", "Ancient Dusk" ];
  var newCo = companyName[ Math.floor ( Math.random() * ( companyName.length-1) + 1)];
  // var newCo = {
  //   test: "Henry's Hardware"
  // };
  console.log( newCo );
  return newCo;
};

module.exports = randomCompanyName;
