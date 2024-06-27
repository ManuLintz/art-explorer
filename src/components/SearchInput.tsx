import { useState } from "react";
import "@/components/SearchInput.css";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function SearchInput({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  function handleReset() {
    setSearchTerm("");
    onSearch("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-input">
        <input
          placeholder="Search for art..."
          value={searchTerm}
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          <MagnifyingGlassIcon />
        </button>
        <button onClick={() => handleReset()} className="reset-button">
          <Cross2Icon />
        </button>
      </div>
    </form>
  );
}
