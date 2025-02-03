function myFunction<T extends object>(objectWithName: T): T {
  return {
    ...objectWithName,
  };
}

export function Challenge() {
  const object = myFunction({
    name: "Martha",
    lastname: "Collins",
    age: 33,
  });

  const falsyObject = myFunction({
    noName: "Nope",
  });
}
