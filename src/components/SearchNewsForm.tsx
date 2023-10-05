import React from "react";

type Props = {
  searchUpdate: (search: string) => void;
  search: string;
};

const SearchNewsForm: React.FC<Props> = ({ searchUpdate, search }) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & EventTarget>,
  ) => searchUpdate(event.target.value);
  return (
    <div className="mb-14">
      <input
        className="border border-[#4F4557] dark:border-gray-300 outline-none p-3 w-full rounded-lg shadow-md bg-[#F4EEE0] dark:bg-[#6D5D6E] text-[#4F4557] dark:text-[#F4EEE0] placeholder-[#4F4557] dark:placeholder-[#F4EEE0]"
        placeholder="Search news..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchNewsForm;
