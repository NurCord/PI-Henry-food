import * as React from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/navbar/NavBar";
import { allRecipes, allDiets } from "../../redux/actions/Actions";
import Paginado from "../../components/Paginado";

export default function Home() {
  let dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(allRecipes())
    dispatch(allDiets())
  }, [dispatch])

  return (
    <div>
      <NavBar/>
      <div >
        <Paginado/>
      </div>
    </div>
  );
}
