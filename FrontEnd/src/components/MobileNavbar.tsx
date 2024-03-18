import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500"></Menu>
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <SheetTitle>Welcome to Food Stall</SheetTitle>
        <Separator />
        <SheetDescription className="flex ">
          <Button className="flex-1 font-bold bg-orange-500 text-slate-900">
            LOGIN
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
