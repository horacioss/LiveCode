export const sortBy = (data, name, isSorted) => {
  const copy = [...data];

  if (isSorted) {
    switch (name) {
      case "longitude" || "latitude":
        copy.sort(
          (x, y) => x.location.coordinates[name] - y.location.coordinates[name]
        );
        break;
      case "name":
        copy.sort((x, y) =>
          x.location.street[name].localeCompare(y.location.street[name])
        );
        break;
      case "number":
        copy.sort((x, y) => x.location.street[name] - y.location.street[name]);
        break;
      case "postcode":
        copy.sort((x, y) => x.location[name] - y.location[name]);
        break;
      default:
        copy.sort((x, y) => x.location[name].localeCompare(y.location[name]));
        break;
    }
  } else {
    switch (name) {
      case "longitude" || "latitude":
        copy.sort(
          (x, y) => y.location.coordinates[name] - x.location.coordinates[name]
        );
        break;
      case "name":
        copy.sort((x, y) =>
          y.location.street[name].localeCompare(x.location.street[name])
        );
        break;
      case "number":
        copy.sort((x, y) => y.location.street[name] - x.location.street[name]);
        break;
      case "postcode":
        copy.sort((x, y) => y.location[name] - x.location[name]);
        break;
      default:
        copy.sort((x, y) => y.location[name].localeCompare(x.location[name]));
        break;
    }
  }

  return copy;
};
