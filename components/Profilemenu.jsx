import {useState} from 'react'
import { useRouter } from 'next/navigation';

function Profilemenu({ userdata }) {

  const [profilemenuOpen, setprofilemenuOpen] = useState(false);

  const { push } = useRouter();

  function logout() {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_data")
    push("/login")
  }

  return (
    <div className="profile-menu-container fixed">
        <button
          className="open-profile-button bg-cyan-500 text-white font-extrabold p-3"
          onClick={() => {
            setprofilemenuOpen((cur) => !cur);
          }}
        >
          {userdata?.email}
        </button>
        <ul className={`mt-5 ${profilemenuOpen ? "block" : "hidden"}`}>
          <li>
            <button className="bg-red-500 text-white font-extrabold p-3" onClick={() => logout()}>
              Se déconnecter
            </button>
          </li>
          <br />
          <li>
            <button className="bg-red-500 text-white font-extrabold p-3">
              Mettre à jour son mot de passe
            </button>
          </li>
        </ul>
      </div>
  )
}

export default Profilemenu