import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  // 我們可以透過使用notFound，讓頁面顯示出404
  if(id> 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
