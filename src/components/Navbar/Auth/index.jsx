import { Menu } from "@headlessui/react";
import { Icon } from "../../../assets/Icons";
import React from "react";

const Auth = () => {
  const user = {
    name: "Sabuhi",
    avatar: "https://avatars.githubusercontent.com/u/62444892?v=4",
  };

  return (
    <Menu as="nav" className={"relative z-10"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center justify-center bg-black h-8 rounded-3xl pr-2 ${open ? 'bg-[#282828]' : 'bg-black'} hover:bg-[#282828]`}
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-0.5 mr-2"}
              alt="avatar"
            />
            <span className="mr-2 text-sm font-bold">{user.name}</span>
            <span className={`${open && 'rotate-180'}`}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 translate-y-2 rounded bg-[#282828]"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center justify-between px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Account
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item as='div' className={'border-t border-white border-opacity-10'}>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="/"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
