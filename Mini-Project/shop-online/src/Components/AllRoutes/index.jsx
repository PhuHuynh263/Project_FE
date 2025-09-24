import { useRoutes } from "react-router-dom";
import { routes } from "../../Routes"

function AllRoutes() {
    const element = useRoutes(routes);

    return (<>
        {element}
    </>)
}
export default AllRoutes;