"use client";
import { useGetOrdersQuery } from "@/redux/features/orderApi";
import { useAppSelector } from "@/redux/hooks";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Menu } from "antd";
import Link from "next/link";
import IOrder from "@/Types";

function AppHeader() {
  const { user, isLoading: userIsLoading } = useAppSelector(
    (state) => state.user
  );
  const { data, isLoading, isError } = useGetOrdersQuery(null);
  const orders: IOrder[] = data?.data;
  let totalOrder: number = 0;
  if (!isLoading && !userIsLoading && !isError && orders?.length > 0) {
    orders.filter((order) => {
      if (order.userEmail === user?.email) {
        totalOrder = totalOrder + 1;
      }
    });
  }

  const onMenuClick = () => {};

  return (
    <div className="flex justify-between h-16 items-center shadow-lg lg:px-10">
      <Menu
        style={{ border: "none" }}
        className="w-full"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: (
              <Link className="text-lg font-bold" href={`/`}>
                Champ Hero
              </Link>
            ),
            key: "/",
          },
          {
            label: <Link href={`/feedback`}>Review</Link>,
            key: "feedback",
          },
          {
            label: <Link href={`/courses`}>Courses</Link>,
            key: "courses",
          },
          {
            label: "Category",
            key: "category",
            children: [
              {
                label: "Programming",
                key: "Programming",
              },

              {
                label: "Marketing",
                key: "Marketing",
              },
              {
                label: "Graphics",
                key: "Graphics",
              },
              {
                label: "Accounting",
                key: "Graphics",
              },
              {
                label: "Video",
                key: "Video",
              },
            ],
          },
          {
            label: (
              <input
                placeholder="Search Your Course"
                className="w-full h-10 px-3 py-2 text-sm border rounded-md border-blue-500 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              />
            ),
            key: "search",
          },
        ]}
      />

      {user?.email ? (
        <>
          <div className="flex">
            <Badge count={totalOrder} size="small" color="blue">
              <Link href="/orders" className="cursor-pointer">
                <ShoppingCartOutlined style={{ fontSize: "28px" }} />
              </Link>
            </Badge>
            <Link href="/profile">
              <UserOutlined
                style={{
                  fontSize: "28px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link className="flex" href="/login">
              <button className="inline-block m-2 px-4 py-2 outline outline-offset-1 outline-blue-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:text-white">
                Login
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default AppHeader;
