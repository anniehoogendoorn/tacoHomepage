dailyTaco.factory('TacosFactory', function TacosFactory() {
  var factory = {};
  factory.tacos = [
    {
      tacoType: "Carne Asada",
      quantity: 0,
      minPrice: 25,
      maxPrice: 99,
      currentPrice: 0
    },
    {
      tacoType: "Pollo",
      quantity: 0,
      minPrice: 23,
      maxPrice: 118,
      currentPrice: 0
    },
    {
      tacoType: "Carnitas",
      quantity: 0,
      minPrice: 32,
      maxPrice: 148,
      currentPrice: 0
    },
    {
      tacoType: "Al Pastor",
      quantity: 0,
      minPrice: 43,
      maxPrice: 198,
      currentPrice: 0
    },
    {
      tacoType: "Adobada",
      quantity: 0,
      minPrice: 98,
      maxPrice: 374,
      currentPrice: 0
    },
    {
      tacoType: "Chorizo",
      quantity: 0,
      minPrice: 224,
      maxPrice: 963,
      currentPrice: 0
    },
    {
      tacoType: "Cabeza",
      quantity: 0,
      minPrice: 742,
      maxPrice: 3598,
      currentPrice: 0
    },
    {
      tacoType: "Lengua",
      quantity: 0,
      minPrice: 697,
      maxPrice: 2963,
      currentPrice: 0
    },
    {
      tacoType: "Tripas",
      quantity: 0,
      minPrice: 354,
      maxPrice: 3275,
      currentPrice: 0
    },
    {
      tacoType: "Pescado",
      quantity: 0,
      minPrice: 2306,
      maxPrice: 4712,
      currentPrice: 0
    },
    {
      tacoType: "Camarones",
      quantity: 0,
      minPrice: 2904,
      maxPrice: 8487,
      currentPrice: 0
    }
  ];
  return factory;
});
