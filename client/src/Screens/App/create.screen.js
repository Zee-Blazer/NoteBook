
// Component
import { HeaderNav } from "../../Component/Header/header-nav.component";
import { CreateMainNavComponent } from "../../Component/Create/main-nav.component";
import { CreateSideNavComponent } from "../../Component/Create/side-nav.component";

export const CreateScreen = () => {

    return (
        <div>
            <HeaderNav />

            <div  className="nav__container">
                <CreateSideNavComponent />
                <CreateMainNavComponent />
            </div>


        </div>
    )
}
