import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import AboutUs from './components/pages/about/about.js';
import ContactUs from './components/pages/contact_us/contact_us.js';
import DietPrograms from './components/pages/diet_programs/diet_programs.js';
import FitnessPrograms from './components/pages/fitness_programs/fitness_programs.js';
import Articles from './components/pages/articles/articles.js';
import Istory from './components/pages/istory/istory.js';
import LoginPage from './components/pages/login_register/login_page.js';
import RegisterPage from './components/pages/login_register/register_page.js';
import ProfilePage from './components/general/profile/profile.js';

import Error from './components/error';

class App extends React.Component {
    render(){
        return (

                <main>

                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={AboutUs} />
                        <Route path="/diet_programs" component={DietPrograms}/>
                        <Route path="/fitness_programs" component={FitnessPrograms} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/istory" component={Istory} />
                        <Route path="/contact_us" component={ContactUs} />
                        <Route path="/login_page" component={LoginPage} />
                        <Route path="/register_page" component={RegisterPage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route component={Error}/>
                    </Switch>

                </main>

        );
    }
}

export default App;
