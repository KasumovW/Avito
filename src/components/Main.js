import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImage, loadMenus } from "../redux/actions";
import Image from "./Image";
import { useParams } from "react-router-dom";

function Main(props) {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.items);
  const loading1 = useSelector((state) => state.images.loading);
  useEffect(() => {
    dispatch(loadImage());
  }, [dispatch]);

  const params = useParams();
  useEffect(() => {
    dispatch(loadMenus(params.id));
  }, [dispatch, params]);

  return (
    <div className="center">
      {loading1 ? (
        <div>
          <div className="load">Loading...</div>
          <div className="pls">Please wait, the download is in progress...</div>
        </div>
      ) : (
        images.map((data) => {
          return (
            <Image
              modalActive={props.modalActive}
              setModalActive={props.setModalActive}
              data={data}
              key={data.id}
            />
          );
        })
      )}
    </div>
  );
}

export default Main;
