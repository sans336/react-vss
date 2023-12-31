const isMatchingCharacter = (str, char) => {
  if (!str) return false;
  str = str.toLowerCase();
  char = char.toLowerCase();
  return str.match(char);
};
useEffect(() => {
    const result = products.filter((item) => {
      const { title, description, category } = item;

      if (isMatchingCharacter(title, search)) {
        return true;
      }

      if (isMatchingCharacter(description, search)) {
        return true;
      }

      if (isMatchingCharacter(category, search)) {
        return true;
      }

      return false;
    });

    setFilteredProducts(result);
  }, [search, products]);