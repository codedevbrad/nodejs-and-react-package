import React    from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

import { DefaultHeadSEO , HeadSeo } from './seoTag';

import ProtectedRoute from './_routes/app_main/protectedRoute';
import Error404       from './404page';

import App_main    from './_routes/app_main/main.render';
import App_explore from './_routes/app_explore/explore.homepage';

import './_cssLibrary/class_reset.css';
import './_cssLibrary/class_app.scss';


const Example = ( { name } ) => {
    return (
        <div> protected user route { name } </div>
    )
}

const LoginScreen = ( { history , match } ) => {
    //history.push('/path');
    if ( match.params.id === 'true' ) {
       history.push('/true');
    } else {
       history.push('/false');
    }
    return (
      <div>
          please log in { match.params.id }
      </div>
    )
}

const App = () => {
    return (
      <Router>
          <div className="App">
                <HeadSeo title={ 'template' } description={ 'template description'} keywords={ 'react , css' }/>
                <Switch>
                    <Route path="/"    exact component={ App_explore } />
                    <Route path="/app" exact component={ App_main    } />
                    <ProtectedRoute    path="/app/protected" component={ Example } />
                    <Route exact path="/login/:id" component={ LoginScreen }/>
                    <Route path="*"    exact component={ Error404    } />
                </Switch>
          </div>
    </Router>
    );
}

export { App };

ReactDOM.render( <App /> , document.getElementById('root'));
