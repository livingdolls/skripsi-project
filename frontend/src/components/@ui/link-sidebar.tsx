import { Link } from "react-router-dom";

export type LinkSidebarProps = {
    icon : JSX.Element;
    link : string,
    name : string
}

export const LinkSidebar = ({icon,link, name}: LinkSidebarProps) => {
    return (
        <Link to={link} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-unisbank-300  hover:text-gray-300">
            {icon}

            <span className="mx-2 text-sm font-medium">{name}</span>
        </Link>
    )
}