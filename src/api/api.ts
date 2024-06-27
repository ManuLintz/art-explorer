const apiKey = "IGMbA8ev";
// TODO add axios
const getArt = async ({ pageParam }: { pageParam: number }) => {
  const response = await fetch(
    `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&imgonly=True&ps=4&p=${pageParam}`,
  );
  const data = await response.json();
  return data;
};

export default getArt;
