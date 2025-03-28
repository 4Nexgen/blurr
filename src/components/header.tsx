"use client";
import { Input } from "@/components/ui/input";
// import ConnectWallet from "./connect-wallet";
import { ConnectWalletAPI } from "./connect-wallet-api";
import { Moon, Sun, TerminalIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { toggleTerminal } from "@/store/global";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function Header() {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const global = useSelector((state: RootState) => state.globalSettings);

  const handleToggleTerminal = () => {
    dispatch(toggleTerminal());
  };
  return (
    <div className="flex items-center gap-4 justify-between border-b p-2">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant={"outline"}
          onClick={() => handleToggleTerminal()}
          className="px-2.5"
        >
          <TerminalIcon size="5" />
        </Button>
        {global.showTerminal}
        <Input placeholder="Type a command or search..." className="w-80" />
      </div>
      {/* <ConnectWallet /> */}
      <ConnectWalletAPI />
    </div>
  );
}
