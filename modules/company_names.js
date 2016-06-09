var randomCompanyName = function (){
  var companyName = [ "Goofy Inc.", "Lama Lama", "Pizza Plaza", "Henry's Hardware Store", "Adam's Atom Bombs", "Nick's Karate Class", "Water Digital", "Planet Gummy Bears", "Sally's Sweets", "Ninja Stars Inc.", "Ancient Dusk" ];
  console.log( companyName[ Math.floor ( Math.random() * ( companyName.length-1) + 1)]);
  return companyName[ Math.floor ( Math.random() * ( companyName.lenth-1) + 1)];
};

module.exports = randomCompanyName;
