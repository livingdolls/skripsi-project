import logo from "../../assets/unisbank-logo.webp"

export const Login = () => {
    return (
        <div className="w-full h-full flex flex-row ">
            <div className="w-1/2 h-full bg-unisbank-500 flex justify-center align-center items-center">
                <img src={logo} className="w-2/3 h-2/3"/>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center align-center items-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-2/3">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                        <p className="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-unisbank-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}