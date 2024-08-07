import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFiles } from '../../store/slices/fileSlice'; 
import axios from '../../utils/axios';
import Navbar from '../../components/Navbar/Navbar';
import './FilesPage.css';
import { useNavigate } from 'react-router-dom';

const FilesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const files = useSelector((state) => state.files || []);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/files/list', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setFiles(response.data.files));
      } catch (error) {
        console.error('Error fetching files:', error.response?.data?.message || error.message);
      }
    };

    fetchFiles();
  }, [dispatch, token]);

  return (
    <div className="files-page">
      <Navbar />
      <div className="files-container">
        <h1>Files</h1>
        <button className="back-button" onClick={() => navigate('/home')}>
          Back to Home
        </button>
        <ul className="files-list">
          {files.length > 0 ? (
            files.map((file) => (
              <li key={file._id}>
                {file.filename} - Uploaded on: {new Date(file.uploadedAt).toLocaleDateString()}
                <button
                  className="download-button"
                  onClick={() =>
                    window.location.href = `http://localhost:8080/files/download/${file._id}`
                  }
                >
                  Download
                </button>
              </li>
            ))
          ) : (
            <p>No files available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilesPage;
