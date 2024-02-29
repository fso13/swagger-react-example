import './App.css';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import swaggerDocument from './swagger.json';

function App() {
  return ( <SwaggerUI spec={swaggerDocument} />)}

export default App;
