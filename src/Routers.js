import App from "./App";
import { render } from "react-dom";
import CommentPage from "./component/CommentPage";


render(
    <BrowserRouter>
         <Routes>
                <Route path="/" element={<Header/>+<App />} />
                <Route path="comment/" element={<CommentPage />} />
         </Routes>
    </BrowserRouter>)
