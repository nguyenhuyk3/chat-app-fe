import { UserAvartar as IUserAvartar } from "./interfaces"

export const UserAvartar: React.FC<IUserAvartar> = ({ width = "15px", height = "15px", className = "" }) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A9.004 9.004 0 0012 21a9.004 9.004 0 006.879-3.196M16.5 12A3.5 3.5 0 0113 8.5h-2A3.5 3.5 0 017.5 12M12 7a5 5 0 110-10 5 5 0 010 10zm0 14a7 7 0 100-14 7 7 0 000 14z" />
    </svg>

}