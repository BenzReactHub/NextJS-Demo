import React from 'react'

interface User {
  id: number;
  name: string
}

// 注意，這邊的渲染是發生在server上面
const UsersPage = async () => {
  // 經常跟新的data，我們就不要做緩存
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  // 每十秒從Next.js後端緩存提取data到前端，這樣可以大幅降低對API的調用
  // 但是cache只能用在fetch，axiox沒有這個功能
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: { revalidate: 10 }});

  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user=> <div key={user.id}>{user.name}</div>)}
      </ul>
    </>
  )
}

export default UsersPage