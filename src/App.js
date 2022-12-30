import logo from "./logo.svg";
import "./App.css";
import { Altura } from "@altura/altura-js";
import MainRoutes from "./routes/mainRoutes";
import { MainContext } from "./context/mainContext";
import {styles} from './styles';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
  const handleClickNew = async () => {
    const newVar = new Altura("D6RSE4R-9T6MJ8H-K1HN3PQ-5ZHRFYT");
    const alturaUser = await newVar.getUser(
      "0xcdec817e160fea97438e7d777ca48b8f41a4cd02"
    );
    console.log("hola");
    try {
      console.log(alturaUser);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <MainContext.Provider>
     <div className={classes.root}>
     <MainRoutes />
     </div>
    </MainContext.Provider>
  );
}

export default App;
