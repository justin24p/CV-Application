export default function SideMenu(props) {
    return (
        <div className="side-menu">
            <div className="menuButtons">
                <button>Clear Resume</button>
                <button>Load Example</button>
                {props.children}
            </div>
        </div>
    );
}
