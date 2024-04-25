import type { MetaFunction } from "@remix-run/node";
import Avatar from "./components/avatar";

export const meta: MetaFunction = () => {
  return [
    { title: "thinking of you" },
    { name: "description", content: "tell your friends" },
  ];
};

export default function Index() {
  return (
    <div className="artboard phone-1 artboard-demo sm:min-h-screen sm:max-w-xs items-center">
      <Avatar />
      


    </div>


  );
}
