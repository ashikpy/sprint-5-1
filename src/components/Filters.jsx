import { useState } from "react";
import users from "../utils/data";

export default function Filters() {
  const [nameFilter, setNameFilter] = useState("");
  const [underageFilter, setUnderageFilter] = useState(false);
  const [role, setRole] = useState("");
  const [roleCount, setRoleCount] = useState(0);
  const [roleBtnClicked, setRoleBtnClicked] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  function totalRoles() {
    let count = 0;
    users.forEach((user) => {
      if (user.role.toLowerCase() === role) {
        count++;
      }
    });
    setRoleCount(count);
    setRoleBtnClicked(true);
  }

  function handleSearchClick() {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    setFilteredUsers(filtered);
    setSearchClicked(true);
  }

  return (
    <div className="w-[30%] border border-gray-300 bg-white p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Filters</h1>

      <label htmlFor="nameFilter" className="block mb-2">
        Search by Name:
      </label>
      <div className="flex gap-2 items-center mb-4 justify-center h-10">
        <input
          id="nameFilter"
          type="text"
          placeholder="Enter name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className=" p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={handleSearchClick}
          className="text-white bg-black p-3 px-4 rounded text-sm cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Select */}
      <div className="flex gap-2 items-center mb-4 justify-center h-10">
        <select
          onChange={(e) => setRole(e.target.value)}
          className="p-2 border border-gray-300 rounded h-full"
        >
          <option value="">See Number Of Roles</option>
          <option value="admin">Admins</option>
          <option value="user">Users</option>
          <option value="guest">Guests</option>
        </select>
        <button
          onClick={totalRoles}
          className="text-white cursor-pointer bg-black text-sm rounded w-full h-full"
        >
          Get Count
        </button>
      </div>

      {/* Filter Underage */}
      <button
        onClick={() => setUnderageFilter(!underageFilter)}
        className="text-white bg-black p-3 px-4 rounded text-sm cursor-pointer"
      >
        Show Underage Users
      </button>

      {searchClicked && (
        <div className="mt-4">
          {filteredUsers.length > 0 ? (
            <ul>
              {filteredUsers.map((user) => (
                <li key={user.email} className="font-semibold">
                  {user.name} ({user.role}, Age: {user.age})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No user found.</p>
          )}
        </div>
      )}

      {roleBtnClicked && (
        <p className="mt-2">
          Total Number of{" "}
          <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong> is{" "}
          <strong>{roleCount}</strong>
        </p>
      )}

      {underageFilter ? (
        <div className="mt-2">
          {users.length > 0 ? (
            <ul>
              {users.map((user) =>
                user.age < 18 ? (
                  <li key={user.email} className=" font-semibold">
                    {user.name} ({user.role}, Age: {user.age})
                  </li>
                ) : (
                  <></>
                )
              )}
            </ul>
          ) : (
            <p className="text-gray-500">No user found.</p>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
