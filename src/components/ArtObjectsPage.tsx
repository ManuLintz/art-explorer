import { useState } from "react";
import SearchInput from "@/components/SearchInput";
import ArtObjectsList from "@/components/ArtObjectsList";

function ArtObjectPage() {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <SearchInput onSearch={(searchValue) => setQuery(searchValue)} />
      <ArtObjectsList query={query} />
    </>
  );
}

export default ArtObjectPage;
