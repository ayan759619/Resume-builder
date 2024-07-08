import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ResumePreview from '../components/ResumePreview';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    photo: null as File | null,
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Generate Resume</button>
      </form>
      
      {showPreview && (
        <div className="bg-white p-6 rounded shadow-md">
          <PDFViewer width="100%" height="500">
            <ResumePreview formData={formData} />
          </PDFViewer>
          <PDFDownloadLink document={<ResumePreview formData={formData} />} fileName="resume.pdf">
            {({ loading }) => (loading ? 'Loading document...' : 'Download Resume')}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
