import CoBanner from "components/ads-container/banner";
import CoMap from "components/ads-container/map";
import CoOurServices from "components/ads-container/offers";
import CoPhotos from "components/ads-container/photos";

export default function AHomeView() {
    return (
        <>
            <CoBanner />
            <CoOurServices />
            <CoPhotos />
            <CoMap />
        </>
    );
}
