const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

  const ratePark = parks.find((park) => park.rating === 4.1);
  console.log(ratePark);

  const beginG = parks.filter((park) => park.name.startsWith("G"));
  console.log(beginG);

  const nameRating = parks.map((park) => park.name + " " + park.rating);
  console.log(nameRating);

  const result = parks.some((park) => park.name === "Grand Arches");
  console.log(result)

  const results = parks.every((park) => park.rating > 4.2);
  console.log(results);

  