// import { NextRequest, NextResponse } from "next/server";
// import middleware from "next-auth/middleware";
// export default middleware;
export { default } from "next-auth/middleware";

// 有需要攔截的時候才使用
// export function middleware(reqeust: NextRequest){
//     return NextResponse.redirect(new URL('/new-page', reqeust.url))
// }

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    // 只有路由/users 才會被觸發
    matcher: ['/users/:id*']
}