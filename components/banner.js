import {logo,line} from "./bannner.module.css";
const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo"  className={logo}/>
            </div>
            <div className="col-7 mt-5">
             <div className={line}> Providing Houses All Over The World </div>
            </div>
        </header>
    )
}
export default Banner;