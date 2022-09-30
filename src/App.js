import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { UserData } from './Data';
import BarChart from './components/BarChart';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import * as emailData from './users.json';
import 'rsuite-table/dist/css/rsuite-table.css';
import TextField from '@mui/material/TextField';


function App() {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'Users Gained',
      data: UserData.map((data) => data.userGain),
    }]
  });
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <Table data={emailData}>

            <Column width={100} sortable fixed resizable>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="first_name" />
            </Column>

            
            <Column width={100} sortable fixed resizable>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="last_name" />
            </Column>

            <Column width={100} sortable fixed resizable>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>

            <Column width={100} sortable fixed resizable>
              <HeaderCell>IP address</HeaderCell>
              <Cell dataKey="ip_address" />
            </Column>

          </Table>

          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <BarChart chartData={userData} />
            

        </Route>
      </Switch>
    </div>
  );
}

export default App;
