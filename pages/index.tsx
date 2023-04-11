import AHomeView from "components/views/site";
import { NextPageWithLayout } from "pages/_app";

const Types: NextPageWithLayout = () => {
  return <>
    <AHomeView />
  </>;
};

Types.layout = "WebLayout";

export default Types;
