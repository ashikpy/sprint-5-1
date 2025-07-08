import "../styles/UserList.css";
import UserCard from "./UserCard";
import users from "../utils/data";

export default function UserList() {
  return (
    <div className="user-list lg:w-[60%] xl:w-[70%]  border border-gray-300 bg-white p-6 rounded">
      <h1 className="text-2xl font-bold">User List</h1>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-2">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            role={user.role}
          />
        ))}
      </ul>
    </div>
  );
}
