import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = props => {
  return (
    <div>
      <h1>TOPIC Details</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop/hats' component={TopicsList}/>
        <Route  path='/topics/:topicId' component={TopicDetail} />
      </Switch>
      
    </div>
  );
}

export default App;
