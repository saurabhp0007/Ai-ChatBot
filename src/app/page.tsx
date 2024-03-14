import Main from "./Main/main";
import SideBar from "./sidebar/page";



export default function Home() {
  return (
    <div className="flex flex-row overflow-hidden">
      <SideBar/>
      <Main/>
    </div>
  ); 
}
