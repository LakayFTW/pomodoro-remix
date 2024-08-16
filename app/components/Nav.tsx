import BareButton from "./Buttons/BareButton"
import GithubSVG from "public/icons/github.svg"

export default function Nav() {
    return (
        <div className="flex items-center justify-between w-full h-24 px-10">
            <p className="font-semibold text-custom-text">Logo</p>
            <div className="flex flex-row items-center space-x-10">
                <BareButton>Documentation</BareButton>
                <a href="https://github.com/LakayFTW">
                    <GithubSVG></GithubSVG>
                </a>
            </div>
        </div>
    )
}