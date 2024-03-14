import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>hazaladmin</span>
            </div>
            <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://yt3.ggpht.com/yti/AGOGRCrBMZ0zVX1ljkxhI_zxHtCbl_009xLYRm9pzhsuow=s88-c-k-c0x00ffffff-no-rj"
                alt="" />
                <span>Hazal</span>
            </div>
            <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar