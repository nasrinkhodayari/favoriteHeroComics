import axios from "axios";
import { listApiConstants } from "./constans";

const listService = {
  getComics: () => {
    // return axios.get(
    //   listApiConstants.BASE_URL +
    //     listApiConstants.COMICS +
    //     listApiConstants.EXTRA_PARAMS +
    //     "&limit=5&orderBy=modified"
    // );
  }
};
export default listService;
