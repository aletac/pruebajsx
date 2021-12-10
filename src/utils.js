export const fetchOtherPokemon = async (url, setData, variant = false) => {
  try {
    const fetching = await fetch(url);
    const data = await fetching.json();
    setData(variant ? data : data.results);
  } catch (e) {
    console.log("res", e);
  }
};
