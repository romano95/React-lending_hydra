import { Fragment } from "react";
import HeaderContent from "./components/HeaderContent";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionText from "./components/SectionText";
import SectionFour from "./components/SectionFour";
import CardSection from "./components/CardSection";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionCircle from "./components/SectionCircle";
import FormArea from "./components/FormArea";
import SectionFooter from "./components/SectionFooter";

export default function App() {
  return (
    <Fragment>
      <header className="container">
        <HeaderContent />
      </header>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionText
          nameh1="INTRODUCTION"
          nameh2="TO HYDRA VR"
          namep="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
        <SectionFour />
        <SectionText
          nameh1="WHY BUILD"
          nameh2="WITH HYDRA?"
          namep="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
        <CardSection />
        <SectionFive />
        <SectionSix />
        <SectionText
          nameh1="HOW WE BUILD"
          nameh2="WITH HYDRA VR?"
          namep="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
        />
        <SectionCircle />
        <FormArea />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
      <footer>
        <SectionFooter />
      </footer>
    </Fragment>
  );
}
