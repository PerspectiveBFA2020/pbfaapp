import React, { useRef, useState, useEffect } from 'react';
import { uploadImage, getDownloadUrl } from './firebase/user';

export const ProfileImage = ({ id }) => {
  const fileInput = useRef(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    getDownloadUrl(id).then((url) => !!url && setImageUrl(url));
  }, [id]);

  const fileChange = async (files) => {
    const ref = await uploadImage(id, files[0], updateProgress);
    const downloadUrl = await ref.getDownloadURL();
    setImageUrl(downloadUrl);
  };

  const updateProgress = (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setUploadProgress(progress);
  };

  return (
    <div className="w-inline-block">
      <img
        className="ui image"
        src={imageUrl || '/profile-placeholder.png'}
        alt="profile"
      />
      
     
     
    </div>
  );
};
