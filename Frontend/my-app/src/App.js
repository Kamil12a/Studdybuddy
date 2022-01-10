import SignIn from "./components/signIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersonalDate from "./components/signUp/personalDate";
import UniversitySection from "./components/signUp/universitySection";
import AboutYouForm from "./components/signUp/AboutYourForm";
import Forum from "./components/forum/Forum";
import { YourGroups } from "./components/yourGroups/YourGroups";
import SearchingGroups from "./components/searchingGroups/SearchingGroups";
import {ToolBar} from "../src/components/global/ToolBar"
import { Navbar } from "./components/NavBar";
function App() {
  return (
    <>
    
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/my-app" component={SignIn}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={PersonalDate}></Route>
          <Route
            path="/universitySection"
            component={UniversitySection}
          ></Route>
          <Route path="/aboutYouForm" component={AboutYouForm}></Route>
          <Route path="/forum" component={Forum}></Route>
          <Route path="/searchinggroups" component={SearchingGroups}></Route>
          <Route path="/yourGroups" component={YourGroups}></Route>
          <Route path="/nativeMenu" component={ToolBar}></Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
