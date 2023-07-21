/* eslint-disable react/prop-types */

const BrowseBy = ({ selectedGenre, handleGenreChange, filterGenre }) => {
  return (
    <div className="flex mt-5">
      <label
        htmlFor="genres"
        className="mb-2 ml-4 mr-3 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Browse by
      </label>
      <select
        id="genres"
        value={selectedGenre}
        onChange={handleGenreChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-light-yellow focus:border-custom-yellow block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      >
        <option value="" disabled className="text-white">
          Genre
        </option>
        {filterGenre.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrowseBy;
