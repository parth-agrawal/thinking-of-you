import type { MetaFunction } from "@remix-run/node";
import Avatar from "./components/avatar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="artboard phone-1 artboard-demo sm:min-h-screen sm:max-w-xs items-center">
      <Avatar />
      
    
    </div>


  );
}
