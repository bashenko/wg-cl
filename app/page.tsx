"use client"
import { useState, useEffect } from "react";

import Header from "./components/header";
import About from "./components/about";
import Forum25 from "./components/forum25";
import International from "./components/international";
import Reports from "./components/reports";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Navigation from "./components/navigation/Navigation";
import Image from "next/image";

import axios from "axios";

type GalleryItem = {
  src: string;
  alt: string;
  type: 'photo' | 'video';
  preview?: string; // Optional for photos, required for videos
};

interface Item {
  id: number;
  Title: string;
  Text: string;
  Image: string;
}

interface Inter_Items {
  id: number;
  Name: string;
  Link: string;
  Image: string;
}

interface Report_Items {
  id: number;
  File: string;
  Image: string;
  Name: string;
}

interface PageData {
  Header: string;
  Subhead: string;
  Header_Image: string;
  About: string;
  Items: number[];
  International_Items: number[];
  Report_Items: number[];
  Images: number[];
  Videos: number[];
  GSF_25_Intro: string;
}

// Loading component to show logo and text
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white flex-col">
      <Image
        src="/images/gsf-blue.png"
        alt="GSF logotype"
        width={256}
        height={75}
        priority
      />
      <p className="mt-4 text-md">Loading...</p>
    </div>
  );
}

export default function Home() {
  const [pageData, setPageData] = useState<PageData | null>(null); 
  const [itemsData, setItemsData] = useState<Item[] | null>(null); 
  const [interItemsData, setInterItemsData] = useState<Inter_Items[] | null>(null);
  const [reportItemsData, setReportItemsData] = useState<Report_Items[] | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryItem[] | null>(null); // Gallery images state
  const [galleryVideos, setGalleryVideos] = useState<GalleryItem[] | null>(null); // Gallery videos state
  const [error, setError] = useState<string | null>(null); 

  // const apiUrl = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Main Page data
        const response = await axios.get(`/api/proxy/main_page`);
        const mainPageData = response.data.data;
  
        if (mainPageData) {
          setPageData(mainPageData);
  
          // Fetch detailed items from GSF25_Items
          const itemIds = mainPageData.Items.join(",");
          const itemsResponse = await axios.get(`/api/proxy/gsf25_items?ids=${itemIds}`);
          
          if (itemsResponse.data.data) {
            setItemsData(itemsResponse.data.data);
          }
  
          // Fetch international items
          const interItemIds = mainPageData.International_Items.join(",");
          const interItemsResponse = await axios.get(`/api/proxy/international_items?ids=${interItemIds}`);
  
          if (interItemsResponse.data.data) {
            setInterItemsData(interItemsResponse.data.data);
          }
  
          // Fetch report items
          const reportItemIds = mainPageData.Report_Items.join(",");
          const reportItemsResponse = await axios.get(`/api/proxy/reports?ids=${reportItemIds}`);
          
          if (reportItemsResponse.data.data) {
            setReportItemsData(reportItemsResponse.data.data);
          }
  
          // Fetch all gallery images
          const galleryImagesResponse = await axios.get(`/api/proxy/gallery_images`);
  
          if (galleryImagesResponse.data.data) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const mappedGalleryImages = galleryImagesResponse.data.data.map((image: any) => ({
              src: `/api/proxy/assets/${image.Image}`,
              alt: image.Description,
              type: 'photo',
            }));
            setGalleryImages(mappedGalleryImages);
          }
  
          // Fetch gallery videos
          const galleryVideosResponse = await axios.get(`/api/proxy/gallery_videos`);
  
          if (galleryVideosResponse.data.data) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const mappedGalleryVideos = galleryVideosResponse.data.data.map((video: any) => ({
              preview: `/api/proxy/assets/${video.Thumbnail}`,
              alt: 'Video',
              type: 'video',
              src: video.Youtube_Embed,
            }));
            setGalleryVideos(mappedGalleryVideos);
          }
  
        } else {
          setError("No data found");
        }
      } catch (error) {
        setError("Error fetching page data");
      }
    };
  
    fetchData();
  }, []);

  if (error) return <div>{error}.</div>;
  if (!pageData) return <Loading />;

  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <Navigation />
      <Header title={pageData.Header} subtitle={pageData.Subhead} image={pageData.Header_Image} />
      <div className="flex flex-col gap-14 mt-14 xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-sm lg:px-14 md:px-8 px-4 ">
        <About content={pageData.About} />
        <Forum25 intro={pageData.GSF_25_Intro} items={itemsData} />
        <International items={interItemsData} />
       <Reports items={reportItemsData} />
      </div>
      <Gallery images={galleryImages} videos={galleryVideos} />
      <Footer />
    </div>
  );
}
