import { Navigate, useNavigate } from "react-router-dom";
import { Auth } from "../services";


export default function Expenses() {

    const navigate = useNavigate()

    const x = () => {
      Auth.logout();
      return navigate('/')
    }

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
        <button onClick={x}>Sair</button>
      </main>
    );
  }