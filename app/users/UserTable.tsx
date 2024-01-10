import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

// 注意，這邊的渲染是發生在server上面
const UserTable = async ({ sortOrder }: Props) => {
  // 經常跟新的data，我們就不要做緩存
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // 每十秒從Next.js後端緩存提取data到前端，這樣可以大幅降低對API的調用
  // 但是cache只能用在fetch，axiox沒有這個功能
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: { revalidate: 10 }});

  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
