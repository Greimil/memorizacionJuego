const randomNumGenerator = () => {
  let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let i, j, k;
  for (i = myArray.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray[i - 1];
    myArray[i - 1] = myArray[j];
    myArray[j] = k;
  }
  // console.log(myArray);
  return myArray;
};

// randomNumGenerator()

const Checker = (e) => {
  switch (e.target.parentNode.id || e.target.id) {
    case "Tommy":
      return randomNumGenerator();

    case "Candy":
      return randomNumGenerator();

    case "Sonny":
      return randomNumGenerator();

    case "lance":
      return randomNumGenerator();

    case "ken":
      return randomNumGenerator();

    case "one":
      return randomNumGenerator();

    case "mercedes":
      return randomNumGenerator();

    case "diego":
      return randomNumGenerator();

    case "diaz":
      return randomNumGenerator();

    case "auntie":
      return randomNumGenerator();

    default:
  }
};

const ChangePosition = (position, element) => {
  switch (position) {
    case 1:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("Arr1");
      break;
    case 2:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("Arr2");

      break;
    case 3:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("Arr3");

      break;
    case 4:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("Arr4");

      break;
    case 5:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("Arr5");

      break;
    case 6:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("abaj6");

      break;
    case 7:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("abaj7");

      break;
    case 8:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("abaj8");

      break;
    case 9:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("abaj9");
      break;
    case 10:
      element.classList.remove(
        "Arr1",
        "Arr2",
        "Arr3",
        "Arr4",
        "Arr5",
        "abaj6",
        "abaj7",
        "abaj8",
        "abaj9",
        "abaj10"
      );

      element.classList.add("abaj10");

      break;

    default:
  }

  // console.log(position, element);
};


export { randomNumGenerator, Checker, ChangePosition };
