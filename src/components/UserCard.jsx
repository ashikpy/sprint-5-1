// eslint-disable-next-line react/prop-types
export default function UserCard({ name, email, age, role }) {
  const colorsForRoles = {
    Admin: ["bg-red-100/80", "border-red-600/20", "bg-red-300"],
    Member: ["bg-blue-100/80", "border-blue-600/20", "bg-blue-300"],
    Guest: ["bg-gray-100/80", "border-gray-600/20", "bg-gray-300"],
  };

  return (
    <li
      className={`user-item p-4 border rounded-lg ${colorsForRoles[role][0]} border ${colorsForRoles[role][1]}`}
    >
      <div className="flex flex-col ">
        <div className="flex gap-2 items-baseline justify-between">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span
            className={`text-[10px] font-mono uppercase p-[2px] font-bold px-[8px] rounded-2xl ${colorsForRoles[role][2]}`}
          >
            {role}
          </span>
        </div>
        <p className="text-sm opacity-50 mt-1 font-medium">{email}</p>
        <p className="text-sm opacity-50 font-mono font-extrabold mt-1">
          <span className="font-normal font-sans">Age: </span>
          {age}
        </p>
      </div>
    </li>
  );
}
