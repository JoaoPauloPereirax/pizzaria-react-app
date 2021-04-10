import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Menu from './pages/Menu'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
      </Switch>
    </BrowserRouter>
  )
}