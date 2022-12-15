import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loding";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
