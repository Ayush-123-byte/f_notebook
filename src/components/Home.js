import Addnote from "./Addnote";
import Notes from "./Notes";

function Home(props) {
  const { showAlert } = props;
  return (
    <>
        <Addnote showAlert={showAlert} />
        <Notes  showAlert={showAlert} />
    </>
  );
}

export default Home;
